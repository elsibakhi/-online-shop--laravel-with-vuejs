<script setup lang="ts">
import { Label, TimeFieldInput, TimeFieldRoot } from 'reka-ui'
import {computed, inject} from 'vue'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,

} from '@/components/ui/form'

import { parseTime} from '@internationalized/date'

const props =defineProps([
  'name',
  'value',
  'label',
  'min',
  'max'])
  
const form:any =inject('form');

const parsedValue = computed ({
  get:()=> props.value ? parseTime(props.value):undefined,
  set: val => val,
})
</script>

<template>

    <FormField :name="name" :model-value="value" >
      <FormItem class="flex flex-col my-5">
        <FormLabel>{{label}}</FormLabel>
        <div class="flex flex-col gap-2">

    <TimeFieldRoot
    :min-value="min"
    :max-value="max"
    :model-value="parsedValue"
    
    @update:model-value="(v) => {
                if (v) {
                
                  form.setFieldValue(name, v.toString())
       
                }
                else {
                  form.setFieldValue(name, undefined)
                }
              }"
      :id="name"
      
      v-slot="{ segments }"
      class="w-36 flex select-none bg-white items-center rounded-lg shadow-sm text-center text-green10 border p-1 data-[invalid]:border-red-500"
    >
      <template
        v-for="item in segments"
        :key="item.part"
      >
        <TimeFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
        >
          {{ item.value }}
        </TimeFieldInput>
        <TimeFieldInput
          v-else
          :part="item.part"
          class="rounded p-0.5 focus:outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9"
        >
          {{ item.value }}
        </TimeFieldInput>
      </template>
    </TimeFieldRoot>
  </div>
      
        <FormMessage />
      </FormItem>
    </FormField>
   

</template>