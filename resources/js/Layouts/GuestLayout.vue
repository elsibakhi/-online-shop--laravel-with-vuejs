<template>
    <div>
      <Navbar />
      <main class="p-4">
        <slot />
      </main>
    </div>
    <Toaster />
      <Confirm />
      <Cart />
  </template>
  
  <script setup lang="ts">
import Navbar from '@/components/layouts/guest/Navbar.vue'
import { toast, Toaster } from '@/components/ui/toast'
import { computed, watch  } from 'vue';
import Confirm from '@/components/actions/Confirm.vue';
import Cart from '@customer/js/components/Cart/drawer.vue';
import { usePage } from '@inertiajs/vue3';

const page = usePage()
// Ensure message is always a string or undefined
const message = computed(() => page.props.message as string | undefined)
const errors = computed(() => page.props.errors );

watch(
  message, 
  (newMessage) => {
      if(newMessage){
        toast({ title: newMessage })

      }
    
  },
  { immediate: true } // Show toast if message exists on load
)
watch(
  errors, 
  (newErrors) => {
      if(newErrors){
        for (const key in newErrors) {
    if (newErrors[key]) {
      
      toast({
        title: newErrors[key],
       
      });
    }
  }

      }
    
  },
  { immediate: true } // Show toast if message exists on load
)


  </script>