<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Link } from '@inertiajs/vue3'
import { ChevronsUpDown, Plus } from 'lucide-vue-next'
import {

  PieChart,

} from 'lucide-vue-next'
import { type Component, ref } from 'vue'



const { isMobile } = useSidebar()

</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
    
     
          <Link href="/">
            <SidebarMenuButton 
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div class="flex items-center justify-center rounded-lg aspect-square size-8 bg-sidebar-primary text-sidebar-primary-foreground">
              <component :is="PieChart" class="size-4" />
            </div>
            <div class="grid flex-1 text-sm leading-tight text-left">
              <span class="font-semibold truncate">
              Ecommerce System
              </span>
              <span class="text-xs truncate">v.1</span>
            </div>
         
          </SidebarMenuButton>
          </Link>
       
        
       
    </SidebarMenuItem>
  </SidebarMenu>
</template>
