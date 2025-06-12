<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { VisStackedBar, VisXYContainer } from '@unovis/vue'
import { useItemStore } from '@vendor/js/Stores/Item'
import { AlarmClockCheck, Boxes, Calendar, CalendarDays, ChartCandlestick, ClockArrowDown, ClockArrowUp, Hash, HashIcon, Info, Minus, Network, Plus, Shapes, Tags } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart } from 'lucide-vue-next'
import AddToCartButton from '@customer/js/components/Cart/addToCartButton.vue'
import defaultImage from "@vendor/images/items/default/item.png"
import { Link, usePage } from '@inertiajs/vue3'

import { CalendarDate, now, parseTime,Time,parseDateTime,parseDate,  } from '@internationalized/date'
import { Item } from '@vendor/js/types/item-preview'
import { buyNow } from '@/actions/Modules/Finance/Http/Controllers/OrderController'
import { show as showBid } from '@/actions/Modules/Finance/Http/Controllers/BidController'
import { show } from '@/routes/admin'

const selectedImage = ref('');
const page = usePage();

const itemStore = useItemStore()

const item = computed<Item>(()=>itemStore.itemPreviewDrawer.item);
const priceAfterDiscount = computed(()=>{
  if (item.value.priceable_type=="normal"){
        return item.value.priceable.price - (item.value.priceable.price * item.value.priceable.discount)
  }

});
const isThisUserisTheOwnerOfItem = computed(()=>{
  if (page.props.auth.user){
       if (page.props.auth.user.id==item.value.user_id){
          return true;
       }
  }

  return false;

});










const closeDrawer= function () :void{
  
    itemStore.changeDrawerOpenState(false);
    selectedImage.value='';
}

const selectImage = (path:string):void => {
  selectedImage.value=path;
}



</script>

<template>
  <Drawer :open="itemStore.itemPreviewDrawer.open" @close="closeDrawer"  >
    
    <DrawerContent >
     <div class="w-[70%] mx-auto" >
  <div class="grid grid-cols-1 gap-6 p-6 bg-white shadow-md lg:grid-cols-2 rounded-2xl">
    <!-- Image Section -->
    <div>
    
 
     
        <template v-if="item.extensions.length>0">
          
          <div>
            
            <div class="h-[400px] w-[400px] mx-auto lg:mx-none  " >
              <img  :src="'storage/'+(selectedImage?selectedImage:item.extensions[0].path)"  class="rounded-xl w-full max-h-[400px] max-w-[400px]"/>
  
            </div>
            <div  class="flex w-1/2 gap-2 mx-auto mt-4 lg:mx-none">
             
                <img  v-for="(image) in item.extensions" :key="image.id" :class="{'border':true}"  :src="'storage/'+image.path" class="object-cover w-20 border rounded-lg cursor-pointer h-30" @click="selectImage(image.path)" />
                
            
            </div>
          </div>
         
        </template>
        <template v-else >
          <div class="h-[400px] w-[400px] mx-auto lg:mx-none  " >
            <img  :src="defaultImage"  class="rounded-xl w-full max-h-[400px] max-w-[400px] "/>

          </div>
      
         
        </template>
        
     
   
        
      


    </div>

    <!-- Info Section -->
    <div class="space-y-4">
      <div class="inline-block px-3 py-1 text-xs text-white bg-gray-800 rounded-full">
        <HashIcon class="inline mb-1" :size="10"   />{{item.code}} 
      </div>

      <h2 class="text-2xl font-bold">{{ item.title }}</h2>
      <p class="text-sm text-muted-foreground">{{ item.description }}</p>

      <template v-if="item.priceable_type=='normal'">
        <div v-if="item.priceable.isBlackFridaySupported" class="inline-block px-3 py-1 text-xs text-white bg-black rounded-full">
        {{$t('Black Friday Sale')}} <Calendar class="inline mb-1" :size="20"   />
      </div>
          
        <div class="text-3xl font-semibold text-black">${{ priceAfterDiscount }}</div>
        <div v-if="item.priceable_type=='normal' && item.priceable.discount >0 " class="text-sm line-through text-muted-foreground">${{item.priceable.price}}</div>
        
      </template>
      <template v-else>
       
          
        <div class="text-3xl font-semibold text-black">${{ item.priceable.initial_price }}</div>
        
        
      </template>

            <!-- Specifications -->
            <div v-if='item.specifications.length>0'>
        <h4 class="mb-2 font-semibold">{{$t('Specifications')}} <Shapes class="inline mb-1" :size="20"   /></h4>
        <div v-for="specification in item.specifications" class="grid grid-cols-3 gap-2 mb-5 text-sm">
          <div class="font-bold" >{{ specification.name }}</div><div class="col-span-2"></div>
          <template v-for="sub in specification.subs">
            
            <div>{{ sub.key }}</div><div class="col-span-2">{{ sub.value }}</div>
          </template>
        
        </div>
      </div>

      <!-- Tags -->
      <div v-if='item.tags.length>0'>
        <h4 class="mb-2 font-semibold">{{$t('Tags')}} <Tags class="inline mb-1" :size="20"   /></h4>
        <div class="flex flex-wrap gap-2">
          <Badge v-for="tag in item.tags">{{ tag.tag }}</Badge>
         
        </div>
      </div>

      <!-- Details -->
      <div >
        <h4 class="mb-2 font-semibold">{{$t('About')}} <Info class="inline mb-1" :size="20"   /></h4>
        <div class="grid grid-cols-2 gap-1 mt-4 text-sm">
          <div ><Boxes class="inline" :size="16"  /> {{$t('Category')}}:</div><div>{{ item.sub_category.name }}</div>
          <div ><Network class="inline" :size="16"  /> {{$t('Sub Category')}}:</div><div>{{ item.sub_category.category.name }}</div>
          <div ><Hash class="inline" :size="16"  /> {{$t('Quantity')}}:</div><div>{{ item.remaining_quantity }} {{ $t('from') }} {{ item.quantity }}</div>
        </div>
        <div v-if="item.priceable_type=='auction'" class="grid grid-cols-2 gap-1 mt-4 text-sm">
          
          <div ><ClockArrowUp class="inline" :size="16"  /> {{$t('Start In')}}:</div><div>{{(new Date(item.priceable.user_start)).toLocaleString() }}</div>
          <div ><ClockArrowDown class="inline" :size="16"  /> {{$t('End In')}}:</div><div>{{  (new Date(item.priceable.user_end)).toLocaleString()  }} </div>
        </div>
        
        </div>
      </div>

      <!-- Buttons -->
      <div v-if="!isThisUserisTheOwnerOfItem" class="w-full ">

        <template v-if="item.priceable_type=='normal'">
            <AddToCartButton :itemId="item.id"/>
          <Link :href="buyNow(item.id).url" class="flex-1">
            <Button variant="default" >{{$t('Buy Now')}}</Button>
          </Link>
        </template>

        <template v-if="item.priceable_type=='auction' && item.priceable.status=='started'">
          <Link :href="showBid(item.priceable_id).url">
            <Button variant="default" >{{$t('Join To This Auction')}}</Button>
          </Link>
        </template>
        
      </div>
    </div>
  </div>





    </DrawerContent>
  </Drawer>
</template>