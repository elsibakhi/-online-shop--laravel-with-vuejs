import * as z from 'zod'
import { now, parseTime  } from '@internationalized/date'



export function getSteps(t,itemsConfig) {
  

  if(!itemsConfig){
      return [];
  }

    return [
    {
        step: 1,
        title: t('Product details'),
        description: t('Provide the product details'),
        schema:z.object({
        title: z.string().min(2).max(100),
        quantity: z.preprocess(
          (val) => val === '' ? itemsConfig.min_quantity : Number(val),
          z.number({message:t('This field must be a number')}).min(itemsConfig.min_quantity).max(itemsConfig.max_quantity)
        ),
        description: z.optional(z.string().max(500)),
      }),
    
      },
      {
        step: 2,
        title: t('Categories and specifications'),
        description: t('Determine the product category and specifications'),
        schema: z.object({
            sub_category: z
            .number().int().min(1,{message:t('Please select a category for this product.')}),
            tags: z.array(z.string()).min(0).max(itemsConfig.max_tags_on_item).optional(),
            specifications: z
            .optional(z.array(z.object({
              name:z.string().min(2).max(100),
                subs:z.array(z.object({
                key:z.string().min(2).max(100),
                value:z.string().min(2).max(100)
              })).min(1).max(itemsConfig.max_sub_specifications),
            })).min(0).max(itemsConfig.max_specifications)),
            
          })
      },
      {
        step: 3,
        title: t('Attaching Images'),
        description: t('Attaching images for your product'),
        schema:z.object({
          'extensions': z.optional(z.array(
            z.object({
              type: z.enum(itemsConfig.extensions.ACCEPTED_IMAGE_TYPES, { message: t('This file type is not supported.') }),
                size: z.number().max(itemsConfig.extensions.MAX_FILE_SIZE,{message:t('Image size must not exceed' ,{max:itemsConfig.extensions.MAX_FILE_SIZE/1024})})
            })
          ).max(itemsConfig.extensions.MAX_FILES_NUMBER,{message:t('You cannot upload more than',{max:itemsConfig.extensions.MAX_FILES_NUMBER})}))
        
      }),
      },
      {
        step: 4,
        title: t('Payment details'),
        description: t('Preparing financial matters'),
        schema:z.object({
          'payment_type': z.enum(['normal','auction']).default('normal'),
          'price':  z.preprocess(
            (val) => val === '' ? itemsConfig.min_price : Number(val),
            z.number({message:t('This field must be a number')}).min(itemsConfig.min_price).max(itemsConfig.max_price)
          ).optional(),
          'discount': z.preprocess(
            (val) => val === '' ? undefined : Number(val)*100,
            z.number({message:t('This field must be a number')}).min(0).max(100).default(0)
          ).optional(),
          'isBlackFridaySupported': z.boolean().default(false).optional(),
          'initial_price':  z.preprocess(
            (val) => val === '' ? itemsConfig.min_price : Number(val),
            z.number({message:t('This field must be a number')}).min(itemsConfig.min_price).max(itemsConfig.max_price)
          ).optional(),
          'date': z.string().date().refine((val)=>{
            const today= new Date();
            const nextMonth= new Date().setMonth(today.getMonth()+itemsConfig.max_auction_session_date_from_today_months);
            const date= new Date(val);

             return (date >= today) && (date <= nextMonth);

          },{message:t("auction.date.validation",{months:itemsConfig.max_auction_session_date_from_today_months})}).optional(),
          'start_time': z.string().time().optional(),
          'end_time': z.string().time().optional(),
        
      }) .superRefine((data, ctx) => {
        if (data.payment_type === 'normal') {
          if (data.price === undefined) {
            ctx.addIssue({
              path: ['price'],
              code: z.ZodIssueCode.custom,
              message: t('Price is required'),
            });
          }
          if (data.discount === undefined) {
            ctx.addIssue({
              path: ['discount'],
              code: z.ZodIssueCode.custom,
              message: t('Discount is required'),
            });
          }
  
        }

        if (data.payment_type === 'auction') {
          if (data.initial_price === undefined) {
            ctx.addIssue({
              path: ['initial_price'],
              code: z.ZodIssueCode.custom,
              message: t('Initial price is required'),
            });
          }
          if (data.date === undefined) {
            ctx.addIssue({
              path: ['date'],
              code: z.ZodIssueCode.custom,
              message: t('Date is required'),
            });
          }
          if (data.start_time === undefined) {
            ctx.addIssue({
              path: ['start_time'],
              code: z.ZodIssueCode.custom,
              message: t('Start time is required'),
            });
          }
          if (data.end_time === undefined) {
            ctx.addIssue({
              path: ['end_time'],
              code: z.ZodIssueCode.custom,
              message: t('End time is required'),
            });
          }
          if (data.start_time != undefined && data.end_time != undefined) {
            if (parseTime(data.end_time).compare(parseTime(data.start_time).add({hours:itemsConfig.min_auction_session_hours}))<0) {
              ctx.addIssue({
                path: ['end_time'],
                code: z.ZodIssueCode.custom,
                message: t('auction.end_time.validation',{hours:itemsConfig.min_auction_session_hours}),
              });
            }
          }
    


  
        }

       
         
      
      
  
        

      })
      },
]; 

}