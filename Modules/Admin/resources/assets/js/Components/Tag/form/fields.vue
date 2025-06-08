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
const props = defineProps<{
  form: any
}>();


</script>

<template>
  <FormField v-slot="{ componentField }" name="tag">
    <FormItem>
      <FormLabel>{{$t('Tag')}}</FormLabel>
      <FormControl>
        <Input v-model="form.tag" type="text" :placeholder="$t('Enter a Tag')" v-bind="componentField" />
      </FormControl>
      <FormMessage />
    </FormItem>
  </FormField>
</template>