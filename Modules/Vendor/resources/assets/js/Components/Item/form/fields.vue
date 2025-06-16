<script setup lang="ts">
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from '@/components/ui/form'
import { Checkbox } from '@/components/ui/checkbox'
// import FileUpload from 'primevue/fileupload';
import { Combobox, ComboboxAnchor, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxList } from '@/components/ui/combobox'
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
import { FieldArray, Field } from 'vee-validate'
import { Textarea } from '@/components/ui/textarea'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel
} from '@/components/ui/select'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Plus, ListPlus, X, ListX } from 'lucide-vue-next'
import FileInput from '@/components/custom/form/FileInput.vue'
import DateInput from '@/components/custom/form/DateInput.vue'
import TimeInput from '@/components/custom/form/TimeInput.vue'
import { ref,provide,computed, inject } from 'vue'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import {today,getLocalTimeZone, parseTime } from '@internationalized/date'
import { useFilter } from 'reka-ui'

import { watch } from 'vue'
import { useItemStore } from '@vendor/js/Stores/Item';

const props = defineProps<{

  config: any,
  form:Object,
  stepIndex: number,
  categories: Array,
  tags: Array,
}>();

const itemStore = useItemStore();
const metaData = itemStore.formModal;


 const form = ref(props.form);
  provide('form',form)

const fileOptions = {
     form:props.form,
     multiple:true,
     accept:"image/*",
     maxFileSize:1000000,
     fileLimit:4,
     name:'extensions',
     files:metaData.data.extensions
}


const paymentType = ref(metaData.data.priceable_type?metaData.data.priceable_type:'normal')





const open = ref(false)
const searchTerm = ref('')

const { contains } = useFilter({ sensitivity: 'base' })

  const filteredTags = computed(() => {
  const options = props.tags.filter(i => !props.form.values.tags?.includes(i.tag))
  return searchTerm.value ? options.filter(option => contains(option.tag, searchTerm.value)) : options
})


const date = computed(() => {
  return convertDateToDateFormat(metaData.data.priceable?.user_start ? new Date(metaData.data.priceable.user_start) : new Date())
})
const start = computed(() => {
  return convertDateToTimeFormat( metaData.data.priceable?.user_start ? new Date(metaData.data.priceable.user_start) : new Date())
})
const end= computed(() => {
 return convertDateToTimeFormat( metaData.data.priceable?.user_end ? new Date(metaData.data.priceable.user_end) : new Date())
})



function convertDateToTimeFormat( date:Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
 
}
function convertDateToDateFormat( date:Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${year}-${month}-${day}`;
 
}

</script>

<template>
  <template v-if="stepIndex === 1">
    <FormField v-slot="{ componentField }" name="title" :model-value="metaData.data.title">
      <FormItem>
        <FormLabel>{{ $t('Title') }}</FormLabel>
        <FormControl>
          <Input type="text"  placeholder="car,iphone ..." v-bind="componentField" />
        </FormControl>

        <FormMessage />
      </FormItem>


    </FormField>
    <FormField v-slot="{ componentField }" name="quantity" :model-value="metaData.data.quantity"  >    

      <FormItem>
        <FormLabel>{{ $t('Quantity')}}</FormLabel>
       
          <NumberField
          class="gap-2"
          
           :min="config.min_quantity" 
           :max="config.max_quantity"
           :default-value="metaData.data.quantity"
           
          v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
       

        <FormMessage />

      </FormItem>

    </FormField>
    <FormField v-slot="{ componentField }" name="description" :model-value="metaData.data.description?metaData.data.description:''">

      <FormItem>
        <FormLabel>{{ $t('Description') }}</FormLabel>
        <FormControl>
          <Textarea v-bind="componentField" :placeholder="$t('Type the description of yout product.')" />
        </FormControl>

        <FormMessage />
      </FormItem>

    </FormField>



  </template>

  <template v-if="stepIndex === 2">



    <FormField v-slot="{ componentField }" name="sub_category" :model-value="metaData.data.sub_category_id">
      <FormItem>
        <FormLabel>Category</FormLabel>

        <Select v-bind="componentField">
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Select a category for this product" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectGroup v-for="category in categories">
              <SelectLabel>{{ category.name }}</SelectLabel>
              <SelectItem v-for="sub_category in category.sub_categories" :value="sub_category.id">
                {{ sub_category.name }}
              </SelectItem>

            </SelectGroup>
          </SelectContent>
        </Select>

        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="specifications" :model-value="metaData.data.specifications" >

      <FormItem>




        <FieldArray name="specifications" v-slot="{ fields, push, remove }">

          <div class="flex justify-between">
            <span>Specifications</span>
            <Plus v-if="fields.length < config.max_specifications" cursor="pointer"
              @click="push({ name: '', subs: [{ key: '', value: '' }] })" />
          </div>





          <Accordion v-for="(field, idx) in fields" :key="idx" type="single">

            <AccordionItem value="item-1">
              <AccordionTrigger>
                <FormField v-slot="{ componentField }" :name="`specifications[${idx}].name`">
                  <FormItem class="flex items-baseline w-1/2 gap-2">
                    <FormLabel>{{ $t('Name') }}</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Ex:Layouts..." v-bind="componentField" />
                    </FormControl>

                    <X v-if="idx == (fields.length - 1)" cursor="pointer" color="red" @click="remove(idx)"
                      class="hover:text-red-950" />
                    <FormMessage />
                  </FormItem>


                </FormField>

              </AccordionTrigger>
              <AccordionContent>
                <FormField v-slot="{ componentField }" :name="`specifications[${idx}].subs`">

                  <FormItem>
                    <FieldArray :name="`specifications[${idx}].subs`" v-slot="{ fields, push, remove }">

                      <div class="flex justify-between">
                        <span>Sub Specifications</span>

                        <ListPlus v-if="fields.length < config.max_sub_specifications" cursor="pointer"
                          @click="push({ key: '', value: '' })" />

                      </div>






                      <div v-for="(field, idx2) in fields" :key="idx2" class="flex items-center gap-3 ">
                        <FormField v-slot="{ componentField }" :name="`specifications[${idx}].subs[${idx2}].key`">
                          <FormItem class="flex items-baseline gap-2">
                            <FormLabel>{{ $t('Key') }}</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="Ex:Width..." v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                          </FormItem>


                        </FormField>

                        <FormField v-slot="{ componentField }" :name="`specifications[${idx}].subs[${idx2}].value`">
                          <FormItem class="flex items-baseline gap-2 ">
                            <FormLabel>{{ $t('Value') }}</FormLabel>
                            <FormControl>
                              <Input type="text" placeholder="Ex:15cm..." v-bind="componentField" />
                            </FormControl>

                            <FormMessage />
                          </FormItem>


                        </FormField>
                        <ListX v-if="idx2 == (fields.length - 1) && idx2 != 0" cursor="pointer" color="red"
                          @click="remove(idx2)" class=" hover:text-red-950" />
                      </div>






                    </FieldArray>



                    <FormMessage />


                  </FormItem>

                </FormField>

              </AccordionContent>
            </AccordionItem>
          </Accordion>







        </FieldArray>
        <FormDescription>
          {{ $t('You can add to ' + config.max_specifications + ' specifications and ' + config.max_sub_specifications + ' sub specifications for each specification.') }}

        </FormDescription>
        <FormMessage />
      </FormItem>

    </FormField>


    <FormField v-slot="{ componentField }" name="tags" :model-value="metaData.data.tags">
      <FormItem>
        <FormLabel>Tags</FormLabel>
        <FormControl>
          <Combobox :model-value="componentField.modelValue" @update:model-value="componentField['onUpdate:modelValue']" v-model:open="open" :ignore-filter="true">
    <ComboboxAnchor as-child>
      <TagsInput  :model-value="componentField.modelValue"
            @update:model-value="componentField['onUpdate:modelValue']" class="gap-2 px-2 w-80">
        <div class="flex flex-wrap items-center gap-2">
          <TagsInputItem v-for="item in componentField.modelValue" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete />
          </TagsInputItem>
        </div>

        <ComboboxInput v-model="searchTerm" as-child>
          <TagsInputInput placeholder="Tag..." class="min-w-[200px] w-full p-0 border-none focus-visible:ring-0 h-auto" @keydown.enter="searchTerm = ''" />
        </ComboboxInput>
      </TagsInput>

      <ComboboxList class="w-[--reka-popper-anchor-width]">
        <ComboboxEmpty />
        <ComboboxGroup>
          <ComboboxItem
            v-for="tag in filteredTags" :key="tag.id" :value="tag.tag"
            @select.prevent="(ev) => {

              if (typeof ev.detail.value === 'string') {
                searchTerm = ''
             
                      const currentTags = form.values.tags || []; // Make sure it's an array
                const newTag = ev.detail.value;
                   if (!currentTags.includes(newTag)) {
                    form.setFieldValue('tags', [...currentTags, newTag]);
}


              }

          
              if (filteredTags.length === 0) {
                open = false
              }
            }"
          >
            {{ tag.tag }}
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxList>
    </ComboboxAnchor>
  </Combobox>
        </FormControl>
       
        <FormMessage />
      </FormItem>
    </FormField>

  


  </template>

  <template v-if="stepIndex === 3">

    <FormField v-slot="{ componentField }" name="extensions" >

<FormItem>
  <FormLabel>{{ $t('Upload Images') }}</FormLabel>
  <FormControl>
  </FormControl>
  
  <FormMessage />
  
</FormItem>

  </FormField>

    <FileInput v-bind="fileOptions"  />




   



  </template>
  <template v-if="stepIndex === 4">

    <FormField v-slot="{ componentField }" name="payment_type" v-model="paymentType">
      <FormItem>
        <FormLabel>{{ $t('Payment Type') }}</FormLabel>

        <Select  v-bind="componentField"  >
          <FormControl>
            <SelectTrigger>
              <SelectValue :placeholder="$t('Choose the payment type')" />
            </SelectTrigger>
          </FormControl>
          <SelectContent >
            
              <SelectItem   value="normal">
                      {{$t('Regular payment')}}
              </SelectItem>
              <SelectItem  value="auction">
                      {{$t('Auction')}}
              </SelectItem>

         
          </SelectContent>
        </Select>

        <FormMessage />
      </FormItem>
    </FormField>


    <div v-if="paymentType=='normal'">

      <FormField v-slot="{componentField }" name="price" :model-value="metaData.data.priceable?.price">
      <FormItem>
        <FormLabel>{{$t('Price')}}</FormLabel>
        <NumberField
          class="gap-2"
             :min="config.min_price" :max="config.max_price"
          :format-options="{
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code',
            currencySign: 'accounting',
          }"
          
         v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
     
        <FormMessage />
      </FormItem>
    </FormField>
  

<FormField v-slot="{componentField }" name="discount" :model-value="metaData.data.priceable?.discount">
      <FormItem>
        <FormLabel>{{$t('Discount')}}</FormLabel>
        <NumberField
          class="gap-2"
          
    :step="0.01"
    :min='0' :max="1"
    :format-options="{
      style: 'percent',
    }"
          
         v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
     
        <FormMessage />
      </FormItem>
    </FormField>


<FormField v-slot="{ value, handleChange }"   type="checkbox" name="isBlackFridaySupported" :model-value="metaData.data.priceable?.isBlackFridaySupported?true:false"  >
      <FormItem class="flex flex-row items-start p-4 mt-4 space-y-0 border rounded-md shadow gap-x-3 ">
        <FormControl>
          <Checkbox   :model-value="value" @update:model-value="handleChange" />
        </FormControl>
        <div class="space-y-1 leading-none ms-2">
          <FormLabel>{{$t('Friday Support')}}</FormLabel>
          <FormDescription>
           {{$t("Do you want to support the Black Friday discount? This may boost your product's reach on Black Friday.")}}
          </FormDescription>
          <FormMessage />
        </div>
      </FormItem>
    </FormField>





    </div>
   
    <div v-if="paymentType=='auction'">


      <FormField v-slot="{componentField }" name="initial_price" :model-value="metaData.data.priceable?.initial_price">
      <FormItem>
        <FormLabel>{{$t('Initial Price')}}</FormLabel>
        <NumberField
          class="gap-2"
             :min="config.min_price" :max="config.max_price"
          :format-options="{
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code',
            currencySign: 'accounting',
          }"
          
         v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <FormDescription>
          Enter value between {{ config.min_price }} and {{ config.max_price }}.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>



<DateInput name="date" :label="$t('Auction Date')" 
 :min="today(getLocalTimeZone())"
  :max="today(getLocalTimeZone()).add({months: config.max_auction_session_date_from_today_months})"
  :value="date"
  />
  <TimeInput  :value="start" name="start_time" :label="$t('Start Time')"  />
<TimeInput  :value="end" name="end_time" :label="$t('End Time')" :min="parseTime(start?start : '00:00:00' ).add({hours:config.min_auction_session_hours})" />




</div>


  </template>
</template>