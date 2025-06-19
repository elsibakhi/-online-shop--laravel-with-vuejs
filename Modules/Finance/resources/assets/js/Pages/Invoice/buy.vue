<template>
    <div class="p-6 mt-10">
      <Card class="max-w-4xl mx-auto shadow-xl rounded-2xl">
        <CardHeader  >
          <div class="flex justify-between">
            <Link :href="route('dashboard')" >
        <ShadcnButton  variant="outline" class="w-20 group">
                       
                       {{ t('invoice.back') }}
                       <Undo2 class="group-hover:translate-x-1"/>
                             </ShadcnButton>
      </Link>
      <a target="_blank" :href="downloadInvoice(transaction.id).url" >
        <ShadcnButton  variant="default" class="w-40 group">
                       
                       {{ t('invoice.download') }}
                       <Download class="group-hover:translate-y-1"/>
                             </ShadcnButton>
      </a>
     
          </div>
   

     
    </CardHeader> 
        <CardContent>
          <div class="flex items-center justify-between pb-4 mb-4 border-b">
            <div>
              <h1 class="text-2xl font-bold">{{ t('invoice.title') }}</h1>
              <p class="text-sm text-muted-foreground">#{{ transaction.id }}</p>
            </div>
            <div>
              <Badge  :class="{'bg-green-500':transaction.status === 'completed', 'bg-yellow-500':transaction.status === 'pending'}">
                {{ transaction.status }}
              </Badge>
            </div>
          </div>
  
          <div class="grid grid-cols-2 gap-4 mb-6">
          
            <div>
              <h2 class="mb-1 font-semibold">{{ t('invoice.buyer') }}</h2>
              <p>{{ transaction.buyer }}</p>
            </div>
          </div>
  
          <DataTable :value="items" responsiveLayout="scroll">
            <Column field="title" :header="t('invoice.item')" />
            <Column field="quantity" :header="t('invoice.quantity')" />
            <Column :header="t('invoice.unit_price')">
              <template #body="{ data }">
                {{ formatCurrency(data.price) }}
              </template>
            </Column>
            <Column :header="t('invoice.total')">
              <template #body="{ data }">
                {{ formatCurrency(data.price * data.quantity) }}
              </template>
            </Column>
            <Column :header="t('invoice.discount')">
              <template #body="{ data }">
                {{ formatCurrency(data.price * data.quantity * data.discount)}}
              </template>
            </Column>
            <Column :header="t('invoice.totalAfterDiscount')">
              <template #body="{ data }">
                {{ formatCurrency(data.price * data.quantity - (data.price * data.quantity * data.discount)) }}
              </template>
            </Column>
          </DataTable>
  
          <div class="flex justify-end mt-6">
            <div class="w-1/2">
              <div class="flex justify-between mb-2">
                <span class="font-medium">{{ t('invoice.subtotal') }}</span>
                <span>{{ formatCurrency(subtotal) }}</span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">{{ t('invoice.discount') }}</span>
                <span>- {{ formatCurrency(totalDiscount) }}</span>
              </div>
              <div class="flex justify-between pt-2 text-lg font-bold border-t">
                <span>{{ t('invoice.total') }}</span>
                <span>{{ formatCurrency(total) }}</span>
              </div>
            </div>
          </div>
  
          <div class="mt-8 text-xs text-center text-muted-foreground">
            {{ t('invoice.thank_you') }}
          </div>
        </CardContent>
      </Card>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { Card, CardContent, CardHeader } from '@/components/ui/card';
  import  {Badge}  from '@/components/ui/badge';
  import  Column  from 'primevue/column';
  import DataTable from 'primevue/datatable';
  import ShadcnButton from '@/components/ui/button/Button.vue'
import { Download, Undo2 } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import { downloadInvoice } from '@/actions/Modules/Finance/Http/Controllers/InvoiceController';
  const { t } = useI18n();
  
const props = defineProps(['transaction']);
  
  const transaction = ref(props.transaction.data);

  const items = ref(transaction.value.items);
  
  const subtotal = computed(() => items.value.reduce((sum, i) => sum + (i.price * i.quantity-(i.price * i.quantity * i.discount)), 0));
  const totalDiscount = computed(() => subtotal.value * 0); // for black friday or codes  and else
  const total = computed(() => subtotal.value - totalDiscount.value);
  
  function formatCurrency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }
  </script>
  
  <style scoped>
  /* Optional additional styles */
  </style>
  