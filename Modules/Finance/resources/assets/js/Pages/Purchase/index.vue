<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import { PurchaseTransaction } from '@finance/js/types/PurchaseTransaction'
import { getColumns } from '@finance/js/components/PurchaseTransaction/table/columns';
import DataTable from '@/components/DataTable.vue';
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';

// set route item as active in sidebar
useSetRouteAsActive("finance")
const { t } = useI18n();



const props = defineProps({ transactions: Object})

// Make data reactive to prop changes
const data = ref<PurchaseTransaction[]>(props.transactions.data)


// Watch for prop updates after router reload
watch(() => props.transactions, (newTransactions) => {
  data.value = newTransactions
})




</script>

<template>

  <Head :title="$t('View All Purchase Transactions')" />

  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Purchase Transactions') },]">


    <div class="py-10 mx-20 container-fluid ">

      <DataTable :columns="getColumns(t)" :data="data" />
    </div>


  </AuthenticatedLayout>
</template>
