

import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"
import { FormModal } from '@/types/formModal';


type Status = 'pending'|'formInProgress'|'formSuccess';

export const useItemStore = defineStore('item', () => {
  
   
    const formModal = ref<FormModal>({})
    const status = ref<Status>('pending')
    const itemPreviewDrawer = ref<Object>({
        open:false,
        item:{
           
        },
    })

    function changeStatus(newState:Status):void {
        status.value=newState;
    }
    function changeFormModal(newFormModal:FormModal):void {
        formModal.value=newFormModal;
    }
  
    function changeItemInDrawer (item:object){
        itemPreviewDrawer.value.open=true; 
        itemPreviewDrawer.value.item=item; 
    }
    function changeDrawerOpenState (state:boolean){
        itemPreviewDrawer.value.open=state; 
       
    }
  
    return {formModal,status,itemPreviewDrawer,changeStatus,changeFormModal,changeItemInDrawer,changeDrawerOpenState }
  })