<script setup lang="ts">
import { useNotificationsStore } from '@/Stores/notifications';
import { computed, inject, ref } from 'vue';
import Drawer from 'primevue/drawer';
import { Link } from '@inertiajs/vue3';
import Button from '../ui/button/Button.vue';
import { X } from 'lucide-vue-next';


const NotificationsStore = useNotificationsStore();

const formattedNotification = computed(()=>NotificationsStore.formattedNotifications)


const visible = inject('notificationBarVisibility');

const loadMorePosts = async () => {

 

    NotificationsStore.fetchNotifications()

}

function onScroll(event) {
    const el = event.target;
    
 
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;

    // the scrolling is at the bottom of scroll bar
    if (atBottom) {
        loadMorePosts()
        
    }
}



</script>

<template>

<div class="flex justify-center card">
        <Drawer v-model:visible="visible" @scroll="ons" >
       
            <template #container="{ closeCallback }" >

        <div class="p-5">
            <div class="fixed flex items-center justify-between w-full gap-2 pe-10">
                 
                    <span class="font-bold">Notifications</span>
                    <span class="font-bold"><X cursor="pointer" @click="closeCallback" /></span>
                </div>
         
                <ul class="flex flex-col p-0 m-0 my-10 list-none" style="max-height: 80vh; overflow-y: auto;" @scroll="onScroll">
                    <Link  v-for="(notification, index) in formattedNotification" :href="notification.route" :key="index" @finish="NotificationsStore.refreshNotifications"
                        class="flex items-center gap-2 px-2 py-3 my-2 cursor-pointer hover:bg-emphasis rounded-border" :class="{'bg-gray-100':!notification.isRead}"
                      >
                        

                        <div>
                            <span class="font-medium">{{ notification.message }}</span>
                            <div class="text-sm text-surface-500 dark:text-surface-400">{{ notification.time }}</div>
                        </div>
                    </Link>
                </ul>
            
        </div>
     
            </template>
       
            <!-- <template #footer>
                <div class="flex items-center gap-2">
                    <Button  size="sm"  class="flex-auto" >Delete All</Button>
                    <Button  size="sm" class="flex-auto" >Mark All As Read</Button>
                </div>
            </template> -->
        </Drawer>
        
    </div>




</template>