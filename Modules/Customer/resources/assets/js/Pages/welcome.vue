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


const {t}=useI18n();

const props =defineProps({ items: Array<Item>, filters: Object });
  
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



</script>

<template>
  <Head :title="$t('welcome to baraa ecommerce system')" />
  <GuestLayout :breadcrumb-titles="[{ title: $t('Items') },]">

    <div class="py-10 mx-20 container-fluid ">
     
      <DataView  v-bind="childCoponentsProps.DataView"  >
            <template #btns="{item}"  >
                  
                    <Actions :item="item" />
                    
            </template>
      </DataView>
      
    </div>

    <ItemPreviewDrawer /> 
  </GuestLayout>
</template>