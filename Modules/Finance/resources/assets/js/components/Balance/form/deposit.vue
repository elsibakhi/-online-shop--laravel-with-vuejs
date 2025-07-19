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

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
import { inject } from 'vue';
import { toTypedSchema } from '@vee-validate/zod'


import { useForm as inertiaForm } from '@inertiajs/vue3'

import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import * as z from 'zod'
import Toaster from '@/components/ui/toast/Toaster.vue'


const { t } = useI18n()
const Schema = z.object({

amount:  z.preprocess(
          (val) => val === '' ? 1 : Number(val),
          z.number({message:t('This field must be a number')}).min(1)
        ),
})

const formSchema = toTypedSchema(Schema)
const shadcnForm = useForm({
  validationSchema: formSchema,
})


const onSubmit = shadcnForm.handleSubmit((values) => {


    window.location.href = route("balance.stripe.checkout-page", {
      amount: values.amount,
    });

    
})

</script>

<template>
  <Toaster />
  <Dialog >

    <DialogTrigger as-child>
      <Button variant="outline" >
        Charge Balance
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] ">
      <DialogHeader>
        <DialogTitle>
    
            Charging Your Balance
        </DialogTitle>

      </DialogHeader>

      <form id="dialogForm" @submit="onSubmit">

        <FormField v-slot="{componentField }"  name="amount" > 
      <FormItem>
        <FormLabel>{{$t('Amount')}}</FormLabel>
        <NumberField
          class="gap-2"
          :min="1" 
          :format-options="{
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code',
            currencySign: 'accounting',
           
          }"
          
         v-bind="componentField"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <FormControl>
              <NumberFieldInput />
            </FormControl>
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
     
        <FormMessage />
      </FormItem>
    </FormField>
      
      </form>

      <DialogFooter>
        <Button type="submit" form="dialogForm">
          {{ $t('wallet.stripe_page') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

</template>