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


import { toTypedSchema } from '@vee-validate/zod'
import { inject , defineProps, withDefaults,ref,watch } from 'vue'

import { useForm as inertiaForm } from '@inertiajs/vue3'

import { useForm } from 'vee-validate'


import Toaster from '@/components/ui/toast/Toaster.vue'



const props = 
  defineProps({
    default: {
    type: Object,
    required: true
  },
  schema: {
    
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

const formSchema = toTypedSchema(props.schema)
const shadcnForm = useForm({
  validationSchema: formSchema,
})

const formModalDefualt = props.default;

let metaData=[]
if(props.metaData.length==0){
   metaData = inject("formModal");
  
}else{
   metaData = props.metaData;
}
const form = inertiaForm(metaData.data)

const isOpen = ref(metaData.open)
const emit = defineEmits(['progressStart', 'progressFinished'])
watch(
  metaData,
  (newMetaData) => {

    for (const key in newMetaData.data) {
      form[key] = newMetaData.data[key];
      shadcnForm.setValues({ [key]: newMetaData.data[key] });
    }


    isOpen.value = newMetaData.open;
  },
  { immediate: true } // Show toast if message exists on load
)

const OpenModalAsAdd = function (): void {
  for (const key in formModalDefualt) {

    metaData[key] = formModalDefualt[key];
  }
  metaData.open = true;

}
const inProgress = inject("inProgress");

const onSubmit = shadcnForm.handleSubmit((values) => {

  form
    .submit(metaData.method, metaData.href, {

      onStart: () => inProgress.value = true,
      onFinish: () => inProgress.value = false,

      onSuccess: () => {
        isOpen.value = false;
      },
      onError: function (message) {
        if (message) {
          // تعيين الأخطاء في النموذج
          shadcnForm.setErrors(message)
        }

      },


    })
})

</script>

<template>
  <Toaster />
  <Dialog v-model:open="isOpen">

    <DialogTrigger as-child>
      <Button variant="outline" @click="OpenModalAsAdd">
        {{$t(operation)}} {{ $t(name) }}
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] ">
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

      <form id="dialogForm" @submit="onSubmit">

        <slot :form="form" />
      </form>

      <DialogFooter>
        <Button type="submit" form="dialogForm">
          {{ $t('Save changes') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

</template>