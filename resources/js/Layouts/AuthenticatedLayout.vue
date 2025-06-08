<script lang="ts">
export const description
  = 'A sidebar that collapses to icons.'
export const iframeHeight = '800px'
export const containerClass = 'w-full h-full'
</script>
<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import type { PropType } from 'vue';
import { usePage } from '@inertiajs/vue3'
import { computed, provide, reactive, ref, watchEffect } from 'vue';
import { toast, Toaster } from '@/components/ui/toast'
import { watch  } from 'vue';
import Confirm from '@/components/actions/Confirm.vue';
import Cart from '@customer/js/components/Cart/drawer.vue';
import { useNotificationsStore } from '@/Stores/notifications';



type MenuItem = {
  title: string;
  href?: string;
};
const props = defineProps({
  breadcrumbTitles: {
    type: Array as PropType<MenuItem[]>,
   
  },
});

const page = usePage()
// Ensure message is always a string or undefined
const message = computed(() => page.props.message as string | undefined)
const errors = computed(() => page.props.errors );

watch(
  message, 
  (newMessage) => {
      if(newMessage){
        toast({ title: newMessage })

      }
    
  },
  { immediate: true } // Show toast if message exists on load
)
watch(
  errors, 
  (newErrors) => {
      if(newErrors){
        for (const key in newErrors) {
    if (newErrors[key]) {
      
      toast({
        title: newErrors[key],
       
      });
    }
  }

      }
    
  },
  { immediate: true } // Show toast if message exists on load
)



const NotificationsStore = useNotificationsStore();

window.Echo.private(`App.Models.User.${page.props.auth.user.id}`)
    .notification((notification:any) => {
    
          toast({title:NotificationsStore.getFormattedNotification(notification,true).message})
         
          NotificationsStore.prependNotification({"data":notification,"type":notification.type,"id":notification.id})
    });


</script>
<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset class="m-10">
      <Toaster />
      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center justify-between w-full gap-2 px-4 ">
          <div class="flex items-center gap-2 px-4" >
            <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="h-4 mr-2" />
          <Breadcrumb>
            <BreadcrumbList >

                <div class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5" v-for="(item, index) in breadcrumbTitles">
             <BreadcrumbItem class="hidden md:block" >
                        <BreadcrumbPage v-if="index+1==breadcrumbTitles?.length" >{{ item.title }}</BreadcrumbPage>
                        <BreadcrumbLink v-else :href="item.href">{{ item.title }} ---- {{ message }} </BreadcrumbLink>
                
            </BreadcrumbItem>
            <BreadcrumbSeparator v-if="(index+1) < (breadcrumbTitles?.length)" class="hidden md:block" />
                </div>
        

            
        
           
            </BreadcrumbList>
          </Breadcrumb>



          </div>
   

      <div v-if="$slots.header" class="card-header justify-self-right">
      <slot name="header" />
    </div>

        </div>
      </header>
      <slot/>
      <Toaster />
      <Confirm />
      <Cart />
    </SidebarInset>
    <!-- <Toaster/> -->
  </SidebarProvider>
</template>