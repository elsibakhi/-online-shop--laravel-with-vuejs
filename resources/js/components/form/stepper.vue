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
import { AutoForm } from '@/components/ui/auto-form'

import { toTypedSchema } from '@vee-validate/zod'
import { inject , defineProps, withDefaults,ref,watch } from 'vue'

import { useForm as inertiaForm, router } from '@inertiajs/vue3'

import { useForm } from 'vee-validate'


import Toaster from '@/components/ui/toast/Toaster.vue'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Stepper, StepperDescription, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
import { toast } from '@/components/ui/toast'

import { Check, Circle, Dot } from 'lucide-vue-next'
import { h } from 'vue'
import * as z from 'zod'
import { onMounted } from 'vue'
import { useToast } from 'primevue/usetoast';
import { useItemStore } from '@vendor/js/Stores/Item';

const toast = useToast();



const props = 
  defineProps({
    default: {
    type: Object,
    required: true
  },
  schema: {
    required: true
  },
  steps: {
    type: Array,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  operation: {
    type: String,
    default: 'Add'
  },
  metaData: {
    type: Array,
    default: []
  },
  });


  const stepIndex = ref(1)
const formModalDefualt = props.default;
let metaData=[]
const itemStore = useItemStore();


if(props.metaData.length==0){
   metaData = itemStore.formModal;
  
}else{
   metaData = props.metaData;
}

const isOpen = ref(metaData.open)

watch(metaData,(newMetaData) => {isOpen.value = newMetaData.open;},{ immediate: true } )
watch(isOpen,(newValue,oldValue) => {  if(newValue){ stepIndex.value=1;}},{ immediate: true } )


const OpenModalAsAdd = function (): void {
  resetModal();
  metaData.open = true;

}
const resetModal = function (): void {
  for (const key in formModalDefualt) {
    metaData[key] = formModalDefualt[key];
  }
  
  stepIndex.value=1;
}




const onProgressCallback = function (){
 
  itemStore.changeStatus("formInProgress"); 

}
const onSuccessCallback = function (){
  metaData.open = false;
  itemStore.changeStatus("formSuccess"); 

}
const onFinishCallback = function (){
 
  itemStore.changeStatus("pending"); 

}


const  onSubmit=function(values,setErrors){

    router.post(metaData.href,{
      _method:metaData.method,
      ...values
    },{
      onProgress : onProgressCallback,
      onSuccess : onSuccessCallback,
      onFinish :  onFinishCallback,
      only:metaData.only
    });

}




</script>

<template>

  <Toaster />
  <Dialog v-model:open="isOpen" >

    <DialogTrigger as-child>
      <Button variant="outline" @click="OpenModalAsAdd">
        {{$t(operation)}} {{ $t(name) }}
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[925px] grid-rows-[auto_minmax(0,1fr)_auto] overflow-y-auto max-h-[90dvh] ">
      <DialogHeader>
        <DialogTitle>
    
          <span v-if="operation !== 'Add'">{{ $t(operation) }}</span>
          <span v-else>

            <span v-if="metaData.method == 'post'">{{ $t('Add') }}</span>
            <span v-else>{{ $t('Edit') }}</span>
          
            
          </span>
          {{ $t(name) }}
          
        </DialogTitle>

      </DialogHeader>


 <Form
    v-slot="{values, meta,errors, validate ,setFieldValue,setErrors }"
    as="" keep-values :validation-schema="toTypedSchema(steps[stepIndex - 1].schema)"
  >
    <Stepper v-slot="{ isNextDisabled, isPrevDisabled, nextStep, prevStep }" v-model="stepIndex" class="block w-full">
      <form
        @submit="(e) => {
        
          e.preventDefault()
          validate()
          if (stepIndex === steps.length && meta.valid) {
            onSubmit(values,setErrors)
          }
        }"
      >
        <div class="flex w-full gap-2 flex-start">
          <StepperItem
            v-for="step in steps"
            :key="step.step"
            v-slot="{ state }"
            class="relative flex flex-col items-center justify-center w-full"
            :step="step.step"
          >
            <StepperSeparator
              v-if="step.step !== steps[steps.length - 1].step"
              class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
            />

            <StepperTrigger as-child>
              <Button
                :variant="state === 'completed' || state === 'active' ? 'default' : 'outline'"
                size="icon"
                class="z-10 rounded-full shrink-0"
                :class="[state === 'active' && 'ring-2 ring-ring ring-offset-2 ring-offset-background']"
                :disabled="state !== 'completed' && !meta.valid"
              >
                <Check v-if="state === 'completed'" class="size-5" />
                <Circle v-if="state === 'active'" />
                <Dot v-if="state === 'inactive'" />
              </Button>
            </StepperTrigger>

            <div class="flex flex-col items-center mt-5 text-center">
              <StepperTitle
                :class="[state === 'active' && 'text-primary']"
                class="text-sm font-semibold transition lg:text-base"
              >
                {{ step.title }}
              </StepperTitle>
              <StepperDescription
                :class="[state === 'active' && 'text-primary']"
                class="text-xs transition sr-only text-muted-foreground md:not-sr-only lg:text-sm"
              >
                {{ step.description }}
              </StepperDescription>
            </div>
          </StepperItem>
        </div>

        <div class="flex flex-col gap-4 mt-4">

                 <slot
                    :form="{values,errors,validate,setFieldValue}"
                    :stepIndex="stepIndex" 
                 
                    />
                      

        </div>

        <div class="flex items-center justify-between mt-4">
          <Button :disabled="isPrevDisabled" variant="outline" size="sm" @click="prevStep()">
            {{ $t('Back') }} 
          </Button>
          <div class="flex items-center gap-3">
            <Button v-if="stepIndex !== steps.length" :type="meta.valid ? 'button' : 'submit'" :disabled="isNextDisabled" size="sm" @click="meta.valid && nextStep()">
              {{ $t('Next') }}
            </Button>
            <Button
              v-if="stepIndex === steps.length" size="sm" type="submit"
            >
            {{ $t('Submit') }} 
            </Button>
          </div>
        </div>
      </form>
    </Stepper>
  </Form>



    
    </DialogContent>
  </Dialog>

</template>