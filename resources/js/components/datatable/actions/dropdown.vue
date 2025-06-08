<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Toaster from '@/components/ui/toast/Toaster.vue';
import { MenuIcon } from 'lucide-vue-next'

const props = defineProps(['operations']);


</script>

<template>
  <Toaster />
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">{{$t('Make Actions')}}</span>
        <MenuIcon class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start">
      <DropdownMenuLabel>{{$t('Actions')}}</DropdownMenuLabel>
      <DropdownMenuItem v-for="operation in operations">
        <a @click.prevent="operation.action">{{$t(operation.name)}}</a>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>