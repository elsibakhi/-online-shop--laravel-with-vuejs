<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'


import { Input } from '@/components/ui/input'

import { defineProps,ref, watch, watchEffect, } from 'vue'





import Toaster from '@/components/ui/toast/Toaster.vue'
import { useForm } from 'laravel-precognition-vue-inertia';
import { store } from '@/actions/Modules/Customer/Http/Controllers/RatingController';
import { ErrorMessage } from 'vee-validate'
import { Star } from 'lucide-vue-next'
import item from '@/routes/item'
import { useToast } from '@/components/ui/toast'



const {toast} = useToast();

const props = 
  defineProps({
    item: {
    type: Object,
    required: true
  },
    open: {
    type: Boolean,
    default: false
  },
  
  });


const isOpen = defineModel('open')
const form = ref();


watch(()=>props.item,function(newItem){
   if(newItem){
    const rateRoute = store(newItem.id);
    form.value = useForm(
    rateRoute.method,
    rateRoute.url,
{
 'rating':1,
 'note':'',
})


   }
},{deep:true})


const setRating = (rating:number) =>{
    form.value.rating=rating
  
    form.value.validate('rating')
}


const onSubmit = () => form.value.submit({

preserveScroll: true,

onSuccess: () => {
    isOpen.value=false;
    form.value.reset()
    toast({title:"Your rating submitted successfully"})
},

});

</script>

<template>
  <Toaster />
  <Dialog v-model:open="isOpen">

    
    <DialogContent class="sm:max-w-[425px] ">
      <DialogHeader>
        <DialogTitle>
    
          <span >{{ $t('Rate An Item') }}</span>
         
        
          
        </DialogTitle>

      </DialogHeader>

      <form v-if="form" id="dialogForm" @submit.prevent="onSubmit">

        <FormField v-slot="{ componentField }" name="rating">
    <FormItem>
      <FormLabel>{{$t('Rating')}}</FormLabel>
      <FormControl>
        <div class="flex">
            
            <Star v-for="n in 5"  @click="setRating(n)" class="text-gray-400 cursor-pointer" :class="{'text-orange-400':form.rating>=n}"  :size="20" />
        </div>
      </FormControl>
      <div v-if="form.invalid('rating')" class="text-[0.8rem] font-medium text-destructive">
        {{ form.errors.rating }}
      </div>
     
    </FormItem>
  </FormField>

        <FormField v-slot="{ componentField }" name="note">
    <FormItem>
      <FormLabel>{{$t('Notes')}}</FormLabel>
      <FormControl>
        <Textarea v-model="form.note"    @update:modelValue="form.validate('note')" :placeholder="$t('Enter your notes if needed')"  />
      </FormControl>
      <div v-if="form?.invalid('note')" class="text-[0.8rem] font-medium text-destructive">
        {{ form.errors.note }}
      </div>
     
    </FormItem>
  </FormField>

      </form>

      <DialogFooter>
        <Button type="submit" form="dialogForm" :disabled="form?.processing">
          {{ $t('Save changes') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

<Toaster />
</template>