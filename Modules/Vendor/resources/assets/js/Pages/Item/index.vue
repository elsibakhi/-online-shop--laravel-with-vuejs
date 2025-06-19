<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import Stepper from '@/components/form/stepper.vue';
import { Item } from '@vendor/js/types/Item';
import { getSteps } from '@vendor/js/Data/Item/form/steps';
import { getStructure } from '@vendor/js/Data/Item/form/structure';
import { ref, provide, computed, reactive, inject } from 'vue';
import { toast } from '@/components/ui/toast';
import {useI18n} from 'vue-i18n'
import Fields from '@vendor/js/Components/Item/form/fields.vue';
import DataView from '@/components/custom/dataview/DataView.vue'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';
import Actions from  "@vendor/js/Components/Item/card/actions.vue"

import { useItemStore } from '@vendor/js/Stores/Item';

import ItemPreviewDrawer from "@vendor/js/Components/Item/show/preview.vue"
import { Button } from 'primevue';
import RatingModal from '@customer/js/components/Rating/modal.vue';

// set route item as active in sidebar
useSetRouteAsActive("item")




const {t}=useI18n();
const page = usePage()
const props = defineProps({

  



  // items: Array<Item>,
   categories:{
    type: Array
   },
   tags: {
    type: Array
   },
   loading: {
    type: String
   },
    message: {
    type: String
   } })
  
   const isThisAllItemsPage = computed(()=>{
      return props.loading=='all'
})

//Start Rating Section 

const openRateModal = ref(false);
const selectedItemForRating =ref();
const rateItem = function(item:Object){

  selectedItemForRating.value=item;
  openRateModal.value=true;
}
//End Rating Section 

  const message = computed(() => page.props.message as string | undefined)
  if (message.value) {
  toast({ title: message.value })
}

const itemsConfig=page.props.itemsConfig;
const steps = getSteps(t,itemsConfig);

const defaultFormStructure = getStructure()
const formModal = reactive({ ...defaultFormStructure });


const itemStore = useItemStore();
itemStore.changeFormModal(formModal);


const fetchUrl = ref('item.load')

if(isThisAllItemsPage.value){
  fetchUrl.value = 'item.load.all'
}else{
  
}

const childCoponentsProps =ref({
  DataView:{
    fetchUrl:fetchUrl.value,
    CardBtnLabel:t('View'),
  },
  Fields:{
           
            config:itemsConfig,
            categories:props.categories,
            tags:props.tags
  },
})




</script>

<template>
  <Head :title="$t('View All Items')" />
  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Items') },]">
    <template v-if="!isThisAllItemsPage"  #header>
      <div class="flex">

      <Stepper  name="An Item" :default="defaultFormStructure" :steps="steps"  v-slot="{form,stepIndex }" >

          <Fields 
            :form="form"   
            :stepIndex="stepIndex" 
           
            v-bind="childCoponentsProps.Fields"
            
            />
      
        </Stepper>
   
      </div>
     
    </template>
    <div class="py-10 mx-20 container-fluid ">
     
      <DataView  v-bind="childCoponentsProps.DataView"  >
            <template #btns="{item,reset}"  >
                  
                    <Actions :item="item" :reset="reset" @rate-item="rateItem(item)" />
                    
            </template>
      </DataView>
      
    </div>

    <ItemPreviewDrawer /> 
    <RatingModal :item="selectedItemForRating" v-model:open="openRateModal"  />
  </AuthenticatedLayout>
</template>