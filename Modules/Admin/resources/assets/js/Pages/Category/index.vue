<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import Modal from '@/components/form/modal.vue';


import type { Category } from '@admin/types/Category';
import { getColumns } from '@admin/Components/Category/table/columns';
import DataTable from '@/components/DataTable.vue';
import FormFields from '@admin/Components/Category/form/fields.vue';

import { onMounted, ref, watch, provide, computed } from 'vue'

import { watchEffect } from 'vue';
import { toast } from '@/components/ui/toast';
import { reactive } from 'vue';
import * as z from 'zod'
import {useI18n} from 'vue-i18n'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';

// set route item as active in sidebar
useSetRouteAsActive("category")
const {t}=useI18n();
const Schema = z.object({
  name: z.string({message: t('Please enter the category you want to add.')}).min(2).max(80),
})

const defaultFormStructure = {
  href: route("category.store"),
  data: {
    name: null,
    id: null,
  },
  method: "post",
  open: false,

}

const formModal = reactive({ ...defaultFormStructure });


provide("formModal", formModal);

const inProgress = ref(false);


provide("inProgress", inProgress);

const props = defineProps({ categories: Array<Category>, message: String })

// Make data reactive to prop changes
const data = ref<Category[]>(props.categories)


// Watch for prop updates after router reload
watch(() => props.categories, (newCategories) => {
  data.value = newCategories
})

const page = usePage()
// Ensure message is always a string or undefined
const message = computed(() => page.props.message as string | undefined)

if (message.value) {
  toast({ title: message.value })
}



</script>

<template>

  <Head :title="$t('View All Categories')" />

  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Categories') },]">
    <template #header>
      <Modal name="A Category" :default="defaultFormStructure" :schema="Schema" v-slot="{ form }">

        <FormFields :form="form" />


      </Modal>
    </template>

    <div class="py-10 mx-20 container-fluid ">

      <DataTable :in-progress="inProgress" :columns="getColumns(t)" :data="data" />
    </div>


  </AuthenticatedLayout>
</template>
