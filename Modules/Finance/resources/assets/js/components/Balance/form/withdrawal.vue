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
import { inject, ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod'


import { useForm as inertiaForm, router, usePage } from '@inertiajs/vue3'

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

const page = usePage();

const formSchema = toTypedSchema(Schema)

const shadcnForm = useForm({
  validationSchema: formSchema,
})


const onSubmit = shadcnForm.handleSubmit((values) => {

  const form = inertiaForm(values);
  form.post(route("balance.stripe.withdrawal"), {
    onSuccess: () => {
    
     router.visit(route("balance.index"), {
        
      });
      // Handle success, e.g., show a success message or redirect
    },
    onError: (errors) => {
      // Handle errors, e.g., show error messages
    
      if( errors.error === 'redirect to onboarding link') {
        // Redirect to the onboarding link
        window.location.href = route("stripe.onboarding-link")
      }
           
    },
  });

   

    
})

</script>

<template>
  <Toaster />
  <Dialog > 

    <DialogTrigger as-child >
      <Button variant="outline" >
     Get My Money 
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px] ">
      <DialogHeader>
        <DialogTitle>
    
            Getting your money
            <DialogDescription>
              You will receive your money in you connected stripe account.
            </DialogDescription>
        </DialogTitle>

      </DialogHeader>

      <form id="dialogForm" @submit="onSubmit">

        <FormField v-slot="{componentField }"  name="amount" > 
      <FormItem>
        <FormLabel>{{$t('Amount')}}</FormLabel>
        <NumberField
          class="gap-2"
          :min="0" 
          :format-options="{
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code',
            currencySign: 'accounting',
            
          }"
          
          v-bind="componentField"
          >
          <!-- :max="page.props.auth.user.balance"  -->
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
          {{ $t('wallet.withdraw') }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

</template>