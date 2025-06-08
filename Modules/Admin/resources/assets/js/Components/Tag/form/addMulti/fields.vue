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

import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input'
import { watch } from 'vue';
import { watchEffect } from 'vue';

const props = defineProps<{
  form: any
}>();



</script>

<template>
    <FormField  v-slot="{ componentField }" name="tags">
   

<FormItem>
      <FormLabel>{{$t('Tags')}}</FormLabel>
      <FormControl>
        <TagsInput  
        
        @update:model-value="componentField['onUpdate:modelValue']"
          v-model="form.tags" 
         >
<TagsInputItem v-for="item in form.tags" :key="item" :value="item">
<TagsInputItemText />
<TagsInputItemDelete />
</TagsInputItem>

<TagsInputInput  placeholder="iphone" />
</TagsInput>
      </FormControl>
      <FormMessage />
    </FormItem>
</FormField>
</template>