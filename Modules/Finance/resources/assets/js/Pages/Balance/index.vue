<template>
  
  <Head :title="$t('My Balance')" />

  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Finance') },{ title: $t('Balance') },]">
    <template #header>

      <div class="flex gap-3">

        <DepositModal/>
        <WithdrawalModal/>
        
      </div>
 
    </template>

    <div class="py-10 mx-20 container-fluid ">

      <div class="space-y-6">
        <Card>
        <CardContent class="flex items-center justify-between">
          <div>
            <p class="text-muted-foreground">Your Balance</p>
            <h2 class="text-2xl font-bold">${{ user.balance }}</h2>
          </div>
        
        </CardContent>
      </Card>
  
      <Card>
        <CardContent>
          <h3 class="mb-4 text-xl font-semibold">Transactions</h3>
          <DataTable :value="transactions" class="w-full">
            <Column field="amount" header="Amount" />
            <Column field="currency" header="Currency" />
            <Column field="transaction_type" header="Type" />
            <Column field="method" header="Method" />
            <Column field="status" header="Status" />
            <Column field="created_at" header="Date"  />
          </DataTable>
        </CardContent>
      </Card>
    </div>
    </div>


  </AuthenticatedLayout>

  </template>
  
  <script setup>
  import { Button } from '@/components/ui/button';
  import { Card, CardContent } from '@/components/ui/card';
  import  DataTable  from 'primevue/datatable';
  import  Column  from 'primevue/column';
  import { router, usePage } from '@inertiajs/vue3';
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';

import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';
import DepositModal from '@finance/js/components/Balance/form/deposit.vue';
import WithdrawalModal from '@finance/js/components/Balance/form/withdrawal.vue';

// set route item as active in sidebar
useSetRouteAsActive("finance")



  const page = usePage();
  const user = page.props.auth.user;
 
  const props = defineProps({
    transactions: {
      type: Array,
      required: true,
    },
  });
  const transactions = props.transactions.data;
  
  console.log(transactions)
  function chargeBalance() {
    router.visit('/wallet/charge');
  }
  </script>
  
  <style scoped>
  /* Customize if needed */
  </style>