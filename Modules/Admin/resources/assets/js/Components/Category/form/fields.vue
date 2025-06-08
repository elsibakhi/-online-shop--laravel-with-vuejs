<script setup lang="ts">

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



const props =  defineProps<{

  form: any

}>();




</script>

<template>

 
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>{{$t('Category')}}</FormLabel>
              <FormControl>
                <Input v-model="form.name"  type="text" :placeholder="$t('Books & Stationery')" v-bind="componentField" />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          </FormField>
      
 
</template>






