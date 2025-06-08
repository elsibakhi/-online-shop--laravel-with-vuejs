

  import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useConfirmStore = defineStore('confirm', () => {
  
    const visibility = ref<boolean>(false)
    const status = ref<'Pending'|'Canceled'|'Confirmed'>('Pending')
    const isConfirmed = computed(():boolean => status.value=='Confirmed')
    const isVisible = computed(():boolean => visibility.value==true)
    function changeStatus(newState:'Pending'|'Canceled'|'Confirmed'):void {
        status.value=newState;
    }
    function changeVisibility(newState:boolean):void {
        visibility.value=newState;
    }


    function resetState(newKey=''):void {
         visibility.value =false
         status.value = 'Pending'
         
    }
  
    return {visibility,status,isVisible,isConfirmed,changeStatus,changeVisibility,resetState }
  })