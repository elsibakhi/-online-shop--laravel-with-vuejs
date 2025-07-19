<script setup lang="ts">
import { EllipsisVertical } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


import SplitButton from 'primevue/splitbutton';

import {useDelete} from '@/Composables/actions/delete';

import {useEdit} from '@/Composables/actions/edit';

import { MoreHorizontal } from 'lucide-vue-next'
import { inject,ref } from "vue";

import Toast from 'primevue/toast';
import { useI18n } from 'vue-i18n';
import { useItemStore } from '@vendor/js/Stores/Item';
import { Button } from 'primevue';
import ItemController from '@/actions/Modules/Vendor/Http/Controllers/ItemController';
import { Item } from '@vendor/js/types/Item';
import axios from 'axios';
import { router, usePage } from '@inertiajs/vue3';
import { useToast } from '@/components/ui/toast';

const {t} = useI18n();
const {toast} = useToast();
const page = usePage();
const emit = defineEmits(['rateItem','showItemRatings'])

const props =defineProps<{
  item: Item,
  reset : Function
}>()

const itemStore = useItemStore();
const form = itemStore.formModal;

const items = ref();

const ownerActions =[
    {
        label: t('Edit'),
        command: () => {
          useEdit(route('item.edit', props.item.id),route('item.update',props.item.id),form)
        }
    },
    {
        label: t('Delete'),
        command: () => {
          useDelete('item.destroy',props.item.id,t,["items"],props.reset)
   

        }
    }

]



 if(page.props.auth.user.role=='admin'){


 
const adminActions = ownerActions;

if(props.item.status == "available"){
adminActions.push({
      label: t('Make Unavailable'),
      command: () => {
        changeStatus('unavailable')
      }
  })
  adminActions.push({
     label: t('Suspend'),
      command: () => {
        changeStatus('suspended')
      }
  })
}

else{
adminActions.push({
      label: t('Make Available'),
      command: () => {
        changeStatus('available')
      }
  })



}
items.value = adminActions

}
else if(page.props.auth.user?.id == props.item.user_id){
  items.value=ownerActions;
}


else{
  items.value=[
    {
        label: t('Rate'),
        command: () => {
         emit('rateItem')
        }
    },
 

]
}


items.value.push({
        label: t('Show Ratings'),
        command: () => {
         emit('showItemRatings')
        }
    },)




function changeStatus(status: string) {


    axios.post(route('item.change.status', props.item.id), { status })
        .then(() => {
         
          router.visit(route('item.index')+'?loading=all', {
           
            onSuccess: () => {
              // Show success toast
              toast({title: t('Success'), description: t('Item status changed successfully')});
            },
          });
        
            
          
            
            
        })
        .catch(error => {
            toast({title: t('Error'), description: t('Failed to change item status')});
        });
}


const onPreview = async () => {
        const show = ItemController.show(props.item.id) 
        await axios.get(show.url).then(res => {itemStore.changeItemInDrawer(res.data)})
   
}

</script>

<template>
      <div class="flex flex-col justify-between lg:flex-row card ">
        <Toast />
        <Button @click="onPreview()"  :label="$t('Preview')" class="m-1" />
        <SplitButton :model="items"  severity="contrast" class="m-1" >
            <span class="flex items-center font-bold ">
              <span class="w-full">{{$t('Actions')}}</span>
            </span>
        </SplitButton>
    </div>
</template>















