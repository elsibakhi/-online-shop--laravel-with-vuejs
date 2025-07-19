<script setup lang="ts">
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Link, usePage } from '@inertiajs/vue3';
import { ChevronRight, type LucideIcon } from 'lucide-vue-next'
import { RouteParams } from '../../../vendor/tightenco/ziggy/src/js';

defineProps<{
  items: {
    title: string
    url: string
  
    icon?: LucideIcon
    role?: string
    isActive?: boolean
    items?: {
      role?: string
      title: string
      url: string
      params?: RouteParams<string>
    }[]
  }[]
}>()

const page = usePage();
const user = page.props.auth.user;

function hasRole(role?:string){
  if(role){
   return user.role==role;
  }
  return true;
}
console.log(user)
</script>

<template>
  <SidebarGroup>
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
      <Collapsible
        v-for="item in items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <SidebarMenuItem v-if="hasRole(item.role)">
          <CollapsibleTrigger as-child>
            <SidebarMenuButton :tooltip="item.title">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
              <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title" >
               
                <SidebarMenuSubButton as-child v-if="hasRole(subItem.role)">
                  <Link :href="route(subItem.url,subItem.params)">
                    {{ subItem.title }}
                  </Link>
                
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    </SidebarMenu>
  </SidebarGroup>
</template>
