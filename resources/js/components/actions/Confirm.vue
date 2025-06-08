<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useConfirmStore } from '@/Stores/confirm'
import { ref } from 'vue';

 const confirmStore =useConfirmStore();



const onCancel=function(){

  confirmStore.changeStatus("Canceled");
  confirmStore.changeVisibility(false);
}
const onContinue=function(){
  confirmStore.changeStatus("Confirmed");
  confirmStore.changeVisibility(false);
}
</script>

<template>
  <AlertDialog :open=" confirmStore.isVisible">
    
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{{$t('Do you want to complete the process?')}}</AlertDialogTitle>
        
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click.prevent="onCancel">Cancel</AlertDialogCancel>
        <AlertDialogAction @click.prevent="onContinue">Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>