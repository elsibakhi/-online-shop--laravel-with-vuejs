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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Category } from '@/types/category';



const props =  defineProps<{

  form: any
  categories: Category[]

}>();




</script>

<template>

 
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>{{$t('Sub Category')}}</FormLabel>
              <FormControl>
                <Input v-model="form.name"  type="text" :placeholder="$t('Mobile Phones')" v-bind="componentField" />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          </FormField>

          <FormField v-slot="{ componentField }" name="category_id">
      <FormItem>
        <FormLabel>{{$t('Category')}}</FormLabel>

        <Select v-bind="componentField" v-model="form.category_id">
          <FormControl>
            <SelectTrigger>
              <SelectValue :placeholder="$t('Select a category for this sub category')" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
       
            <SelectGroup>
              <SelectItem  v-for="category in categories" :value="category.id">
              {{$t(category.name)}}
              </SelectItem>
          
         </SelectGroup>
          </SelectContent>
        </Select>
      
        <FormMessage />
      </FormItem>
    </FormField>
      
 
</template>