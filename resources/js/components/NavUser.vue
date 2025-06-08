<script setup lang="ts">
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import OverlayBadge from 'primevue/overlaybadge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { Link, usePage } from '@inertiajs/vue3';
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-vue-next'
import { computed, provide } from 'vue'

import Popover from 'primevue/popover';


import { ref } from "vue";
import NotificationBar from './notifications/Bar.vue';
import { useNotificationsStore } from '@/Stores/notifications';
import { edit } from '@/actions/App/Http/Controllers/ProfileController';

const visible = ref(false);
const NotificationsStore = useNotificationsStore();
const unreadCount = computed(()=>NotificationsStore.getUnreadNotificationsCount())  

provide('notificationBarVisibility',visible)




const props = defineProps<{
  user: {
    name: string
    email: string
    // avatar: string|null
  }
}>()

const nameInitials = computed(() => {
  let initials_array: String[] =props.user.name.split(" ");
   initials_array = initials_array.map(
    (value:String) :String => value[0].toUpperCase()
  );

  return initials_array.join("")
});
const { isMobile } = useSidebar()
</script>

<template>
  <SidebarMenu>
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <SidebarMenuButton
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar class="w-8 h-8 rounded-lg">
              <AvatarImage src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-lg">
                 {{nameInitials}}
                </AvatarFallback>
            </Avatar>
            <div class="grid flex-1 text-sm leading-tight text-left">
              <span class="font-semibold truncate">{{ user.name }}</span>
              <span class="text-xs truncate">{{ user.email }}</span>
            </div>
            <OverlayBadge :value="unreadCount" size="small" severity="contrast" class="left-[-10px]">
              <ChevronsUpDown class="ml-auto size-4" />
             
          </OverlayBadge>
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          class="w-[--reka-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          :side="isMobile ? 'bottom' : 'right'"
          align="end"
          :side-offset="4"
        >
          <DropdownMenuLabel class="p-0 font-normal">
            <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar class="w-8 h-8 rounded-lg">
                <AvatarImage src="user.avatar" :alt="user.name" />
                <AvatarFallback class="rounded-lg">
                 {{nameInitials}}
                </AvatarFallback>
              </Avatar>
              <div class="grid flex-1 text-sm leading-tight text-left">
                <span class="font-semibold truncate">{{ user.name }}</span>
                <span class="text-xs truncate">{{ user.email }}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Sparkles />
              Upgrade to Pro
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <Link :href="edit().url"> 
            <DropdownMenuItem >
                <BadgeCheck />
                Account
                
              </DropdownMenuItem>
            </Link> 
            <DropdownMenuItem>
              <CreditCard />
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem @click="visible=!visible" >
              <OverlayBadge :value="unreadCount" size="small" >
                <Bell />
</OverlayBadge>
             
              Notifications
            </DropdownMenuItem>

 
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem >
            <LogOut />
            <Link href="/logout" method="post"  >
              
              Log out
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  </SidebarMenu>



<NotificationBar />
</template>
