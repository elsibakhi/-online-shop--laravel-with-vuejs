<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import Modal from '@/components/form/modal.vue';


import type { SubCategory } from '@admin/types/SubCategory';
import { getColumns } from '@admin/Components/SubCategory/table/columns';
import DataTable from '@/components/DataTable.vue';
import FormFields from '@admin/Components/SubCategory/form/fields.vue';

import { onMounted, ref, watch, provide, computed } from 'vue'

import { watchEffect } from 'vue';
import { toast } from '@/components/ui/toast';
import { reactive } from 'vue';
import * as z from 'zod'
import { Category } from '@admin/types/Category';
import {useI18n} from 'vue-i18n'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';

// set route item as active in sidebar
useSetRouteAsActive("category")
const {t} =useI18n();
const Schema = z.object({
  name: z.string({ message: t('Please enter the sub category you want to add.')}).min(2).max(80),
  category_id: z.number({ message: t('Please select a category.')}).int().min(1),
})

const defaultFormStructure = {
  href: route("subcategory.store"),
  data: {
    name: null,
    category_id: null,
    id: null,
  },
  method: "post",
  open: false,

}

const formModal = reactive({ ...defaultFormStructure });


provide("formModal", formModal);

const inProgress = ref(false);


provide("inProgress", inProgress);

const props = defineProps({ sub_categories: Array<SubCategory>,categories: Array<Category>, message: String })

// Make data reactive to prop changes
const data = ref<SubCategory[]>(props.sub_categories)


// Watch for prop updates after router reload
watch(() => props.sub_categories, (newSubCategories) => {
  data.value = newSubCategories
})

const page = usePage()
// Ensure message is always a string or undefined
const message = computed(() => page.props.message as string | undefined)

if (message.value) {
  toast({ title: message.value })
}



</script>

<template>

  <Head :title="$t('View All SubCategories')" />

  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Sub Categories') },]">
    <template #header>
      <Modal name="A Sub Category" :default="defaultFormStructure" :schema="Schema" v-slot="{ form }">

        <FormFields :form="form" :categories="categories" />


      </Modal>
    </template>

    <div class="py-10 mx-20 container-fluid ">

      <DataTable :in-progress="inProgress" :columns="getColumns(t)" :data="data" />
    </div>


  </AuthenticatedLayout>
</template>
