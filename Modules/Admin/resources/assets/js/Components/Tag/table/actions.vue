<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

import Toaster from '@/components/ui/toast/Toaster.vue';
import {useDelete} from '@/Composables/actions/delete';

import {useEdit} from '@/Composables/actions/edit';

import { MoreHorizontal } from 'lucide-vue-next'
import { inject } from "vue";
import { useI18n } from 'vue-i18n';

const {t}= useI18n();

defineProps<{
  tag: {
    id: number
  }
}>()

const form = inject("formModal");


const onEdit =(id:number) => useEdit(route('tag.edit', id),route('tag.update',id),form)

const onDelete = (id:number) => useDelete('tag.destroy',id,t,["tags"])
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
        <a @click.prevent="onEdit(tag.id)">{{$t('Edit')}}</a>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <a @click.prevent="onDelete(tag.id)">{{$t('Delete')}}</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>