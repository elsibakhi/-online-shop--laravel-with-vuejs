<script setup lang="ts">

import { Head } from '@inertiajs/vue3';
import { Item } from '@vendor/js/types/Item';
import { ref } from 'vue';
import {useI18n} from 'vue-i18n'
import DataView from '@customer/js/components/Welcome/Item/dataview/DataView.vue'
import Actions from  "@customer/js/components/Welcome/Item/card/actions.vue"
import ItemPreviewDrawer from "@vendor/js/Components/Item/show/preview.vue"
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { provide } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Category } from '@/types/category';
import { StringAccessor } from '@unovis/ts';
import ItemController, { search as itemSearch } from '@/actions/Modules/Vendor/Http/Controllers/ItemController';
import axios from 'axios';
const {t}=useI18n();
import DefaultItemImage from '@vendor/images/items/default/item.png'
import { useItemStore } from '@vendor/js/Stores/Item';
const props =defineProps({ categories: Array<Object>, filters: Object });
  
 

  const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');

const mentionResults = ref<any[]>([]);
  const showMentionBox = ref(false);
  
const childCoponentsProps =ref({
  DataView:{
    fetchUrl:"customer.load",
    fetchParams: {
      filters: props.filters
      ,
    },
    CardBtnLabel:t('View'),
  },
})

function filterItems(value:string){
   // add filter ?category=value to current route 
    
   const url = new URL(window.location.href);
    url.searchParams.set('category', value);
    window.location.href = url.toString();

   
   
     
      
    
    
     
}


async function fetchMentionData(query: string) {
  try {

    if (!query) {
      mentionResults.value = [];
      showMentionBox.value = false;
      return;
    }
    
    axios.get( itemSearch().url, {
      params: {
        query: query
      }
    }).then(function (res) {
      mentionResults.value = res.data;
      showMentionBox.value = true;
      

    }).catch(function (err) {
      console.error(err);
    });


  } catch (e) {
    console.error('Failed to fetch mentions:', e);
  }
}


const onPreviewItem = async (itemId : string) => {
 
 
  
 const itemStore = useItemStore();
         
     const show = ItemController.show(itemId) 
     await axios.get(show.url).then(res => {itemStore.changeItemInDrawer(res.data)})

}

</script>

<template>


<Head :title="$t('Dashboard')" />

<AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Dashborad') },]" >

  <div class="py-10 mx-20 container-fluid ">
      
    <div class="flex items-center justify-between mb-4">
      <div class="">
      <Input type="text"   placeholder="Search items" @update:model-value="fetchMentionData" />
      <div v-if="showMentionBox"
                class="absolute z-10 w-1/2 p-5 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                <div v-for="option in mentionResults" class="flex flex-wrap items-center w-full gap-4 p-1 pb-5 border-b-2 cursor-pointer"@click="onPreviewItem(option.id)" >
                  <img class="w-12 rounded shrink-0" :src="option.image ? '/storage/' + option.image : DefaultItemImage"
                    :alt="option.title" />
                  <div class="flex flex-col flex-1">
                    <span class="text-sm font-medium">{{ option.title }}</span>
                    <!-- <span :class="['text-sm', { 'text-surface-500 dark:text-surface-400': !selected, 'text-inherit': selected }]">{{ option.category }}</span> -->
                  </div>
                  <span class="font-bold sm:ml-8">${{ option.price }}</span>
                </div>
              </div>
    </div>
      
      <div  >

      
<Select @update:model-value="filterItems"  class="w-full" :default-value="selectedCategory">
<SelectTrigger>
  <SelectValue placeholder="Filter by category" />
</SelectTrigger>
<SelectContent>
  <SelectGroup v-for="category in categories">

    <SelectLabel>{{ category.name }}</SelectLabel>
    <SelectItem v-for="sub in category.sub_categories" :value="sub.slug" :key="sub.id"   >
      {{ sub.name }}
    </SelectItem>
  </SelectGroup>
</SelectContent>
</Select>

</div>


    </div>
 
    
   
    
     <DataView  v-bind="childCoponentsProps.DataView"  >
           <template #btns="{item}"  >
                 
                   <Actions :item="item" />
                   
           </template>
     </DataView>
     
   </div>
   <ItemPreviewDrawer /> 
</AuthenticatedLayout>

</template>