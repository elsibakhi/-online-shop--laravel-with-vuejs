<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import Toaster from '@/components/ui/toast/Toaster.vue';
import {useDelete} from '@/Composables/actions/delete';
import {useEdit} from '@/Composables/actions/edit';

import { MoreHorizontal } from 'lucide-vue-next'

import { inject } from "vue";
import { useI18n } from 'vue-i18n';

const {t}= useI18n();


defineProps<{
  category: {
    id: number
  }
}>()


const form = inject("formModal");


const onEdit =(id:number) => useEdit(route('category.edit', id),route('category.update',id),form)



const onDelete = (id:number) => useDelete('category.destroy',id,t,["categories"])





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
    
    <a   @click.prevent="onEdit(category.id)"  >{{$t('Edit')}}</a>
    </DropdownMenuItem>
      <DropdownMenuItem>
       
        <a   @click.prevent="onDelete(category.id)"  >{{$t('Delete')}}</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>