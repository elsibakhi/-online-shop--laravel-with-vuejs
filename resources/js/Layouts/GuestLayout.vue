<script setup lang="ts">
import ApplicationLogo from '@/components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { Store } from 'lucide-vue-next';
import Cart from '@customer/js/components/Cart/drawer.vue';
</script>

<template >
    <div
        class="flex flex-col items-center w-full min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0"
    >
        <div>
            <Link href="/">
               
                <Store class="w-20 h-20 "  />
            </Link>
        </div>

        <div
            class="px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg"
        >
            <slot />
        </div>
   
        <Cart />
    </div>
</template>
