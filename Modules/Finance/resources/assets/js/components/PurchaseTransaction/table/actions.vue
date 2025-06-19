<script setup lang="ts">
import { buy } from '@/actions/Modules/Finance/Http/Controllers/InvoiceController';
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import Toaster from '@/components/ui/toast/Toaster.vue';
import {useDelete} from '@/Composables/actions/delete';


import { MoreHorizontal } from 'lucide-vue-next'

import { useI18n } from 'vue-i18n';

const {t}= useI18n();


defineProps<{
  transaction: {
    id: number
  }
}>()









const onDelete = (id:number) => useDelete('purchase-transactions.destroy',id,t,["transactions"])






</script>

<template>
    <Toaster />
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">{{$t('Open menu')}}</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>{{$t('Actions')}}</DropdownMenuLabel>

      <DropdownMenuItem>
       
        <a   @click.prevent="onDelete(transaction.id)"  >{{$t('Delete')}}</a>

      </DropdownMenuItem>
      <DropdownMenuItem>
       
       
        <a   :href="buy(transaction.id).url"  >{{$t('Show Invoice')}}</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>