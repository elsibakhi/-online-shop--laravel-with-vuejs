<script setup>
import { ref, onMounted, watch,inject } from 'vue';
import {router} from "@inertiajs/vue3"
import DataView from 'primevue/dataview';
import SelectButton from "primevue/selectbutton"
import Button from "primevue/button"
import Tag from "primevue/tag"
import defaultImage from "@vendor/images/items/default/item.png"

import {List , LayoutGrid} from "lucide-vue-next"
import ListLoading from "@/components/custom/dataview/loading/List.vue"
import GridLoading from "@/components/custom/dataview/loading/Grid.vue"
import { useItemStore } from '@vendor/js/Stores/Item';

import Chip from 'primevue/chip';



const props = defineProps(["fetchUrl","CardBtnLabel"]);



const loading = ref(true);
const groups = ref([1]);
const products = ref([1]);


const fetchData = async function(){
    loading.value=true;
try{

    

const response = await fetch(route(props.fetchUrl) );
const jsonRes = await response.json();
groups.value= jsonRes;



}catch(e){
    console.error(e);
}finally{
    loading.value=false;
}


};





onMounted(fetchData);



const layout = ref('grid');
const options = ref(['list', 'grid']);
const getSeverity = (status) => {

switch (status) {
    case 'available':
        return 'success';

    case 'sold':
        return 'contrast';

    case 'suspended':
        return 'warn';

        case 'deleted':
        return 'danger';

    default:
        return null;
}
}





</script>

<template>
<div class="overflow-auto card" style="max-height: 80vh;" >
        
  
        <DataView v-for="(group,name) in groups" :value="group" :layout="layout">
            <template #header>
                <div class="flex justify-between px-4 py-2">
                    <Chip >{{ name }}</Chip>
                    <SelectButton v-model="layout" :options="options" :allowEmpty="false">
                        <template #option="{ option }">
               
                           <List v-if="option === 'list'" />
                           <LayoutGrid v-else  />
                        </template>
                    </SelectButton>
                </div>
            </template>
            
            <template #list="slotProps">
            
               
                <div v-if="!loading||page>1"  class="flex flex-col ">
                    <div v-for="(item, index) in slotProps.items" :key="index">
                        <div class="flex flex-col gap-4 p-6 sm:flex-row sm:items-center " :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                            <div class="relative md:w-40">
                                <img class="block w-full mx-auto rounded xl:block" :src="item.hasOwnProperty('image_path')?('storage/'+item.image_path):defaultImage" :alt="item.title" />
                                 <div class="absolute dark:bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                    <Tag :value="$ucfirst($t(item.status))" :severity="getSeverity(item.status)"></Tag>
                                </div>
                            </div>
                            <div class="flex flex-col justify-between flex-1 gap-6 md:flex-row md:items-center">
                                <div class="flex flex-row items-start justify-between gap-2 md:flex-col">
                                    <div>
                                     
                                        <span class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ item.sub_title}}</span>
                                        <div class="mt-2 text-lg font-medium">{{ item.title }}</div>
                                    </div>
                             
                                </div>
                                <div class="flex flex-col gap-8 md:items-end">
                                    <div class="p-1 bg-surface-100" style="border-radius: 30px">
                                        <div class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span v-if="item.rating>0" class="text-sm font-medium text-surface-900">{{ item.rating.toPrecision(2) }}/5</span>
                                            <span v-else class="text-sm font-medium text-surface-900">Not Rated</span>
                                            <Star class="text-gray-400" :class="{'text-orange-400':item.rating>0}" :size="20"  />
                                        </div>
                                    </div>
                                    <span class="text-xl font-semibold">${{ item.price }}</span>
                                    <div class="flex flex-row-reverse gap-2 md:flex-row">
                                        <slot name="btns" :item="item" :reset="resetDataView" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ListLoading v-if="loading" />
            </template>

            <template #grid="slotProps">
            
                
                <div v-if="!loading||page>1" class="grid grid-cols-12 gap-2">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-span-12 p-2 sm:col-span-6 xl:col-span-4">
                        <div class="flex flex-col p-6 border rounded border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900">
                            <div class="p-1 bg-surface-100" style="border-radius: 30px">
                                        <div class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span v-if="item.rating>0" class="text-sm font-medium text-surface-900">{{ item.rating.toPrecision(2) }}/5</span>
                                            <span v-else class="text-sm font-medium text-surface-900">Not Rated</span>
                                            <Star class="text-gray-400" :class="{'text-orange-400':item.rating>0}" :size="20"  />
                                        </div>
                                    </div>
                            <div class="flex justify-center p-4 rounded bg-surface-50">
                                <div class="relative mx-auto">
                                    <img class="w-full rounded" :src="item.hasOwnProperty('image_path')?('storage/'+item.image_path):defaultImage"  :alt="item.title" style="max-width: 300px"/>
                                    <div class="absolute dark:bg-black/70 rounded-border" style="left: 4px; top: 4px">
                                        <Tag :value="$ucfirst(item.status)" :severity="getSeverity(item.status)"></Tag>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <div class="flex flex-row items-start justify-between gap-2">
                                    <div>
                                        <span class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ item.sub_title }}</span>
                                        <div class="mt-1 text-lg font-medium">{{ item.title }}</div>
                                    </div>
                               
                                </div>
                                <div class="flex flex-col gap-6 mt-6">
                                    <span class="text-2xl font-semibold">
                                        <span v-if="item.priceable_type=='normal'&& item.discount > 0" class="mx-2"  >${{ item.price -(item.price * item.discount) }}</span>
                                           <span :class="{
                                           'text-gray-500 line-through text-sm' : item.priceable_type=='normal' && item.discount > 0,
                                           
                                           }" >${{ item.price }}</span>   
                                        </span>
                                    <div class="flex gap-2">
                                        <slot name="btns" :item="item" :reset="resetDataView" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GridLoading v-if="loading" />
            </template>
        </DataView>
        
   
        
    </div>
</template>


