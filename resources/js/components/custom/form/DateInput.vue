<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, fromDate ,} from '@internationalized/date'
import { toast } from '@/components/ui/toast'
import { toTypedSchema } from '@vee-validate/zod'
import { CalendarIcon } from 'lucide-vue-next'
import { toDate } from 'reka-ui/date'
import { useForm } from 'vee-validate'
import { computed, h, ref,inject,watch } from 'vue'
import { z } from 'zod'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})
const props = defineProps(['name','label','min','max','value'])

const form:any =inject('form');

const placeholder = ref()

const parsedValue = computed ({
  get:()=> props.value ? parseDate(props.value):undefined,
  set: val => val,
})


</script>

<template>

    <FormField :name="name" :model-value="value" >
      <FormItem class="flex flex-col my-5">
        <FormLabel>{{label}}</FormLabel>
        <Popover>
          <PopoverTrigger as-child>
            <FormControl>
              <Button
                variant="outline" 
              >
                <span>{{ form.values[name] ? df.format(toDate(parseDate(form.values[name]))) : $t("Pick the auction date") }}</span>
                <CalendarIcon class="w-4 h-4 opacity-50 ms-auto" />
              </Button>
              <input hidden>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent class="w-auto p-0">
            <Calendar
              v-model:placeholder="placeholder"
             :value="parsedValue"
              :calendar-label="label"
              initial-focus
              :min-value="min"
              :max-value="max"
              @update:model-value="(v) => {
                if (v) {
                 
                  form.setFieldValue(name, v.toString())
       
                }
                else {
                  form.setFieldValue(name, undefined)
                }
              }"
            />
          </PopoverContent>
        </Popover>
      
        <FormMessage />
      </FormItem>
    </FormField>
   

</template>