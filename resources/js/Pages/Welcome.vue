<script setup lang="ts">
import GuestLayout from '@/Layouts/GuestLayout.vue';
import Card from '@/Components/items/Card.vue';
import { Head } from '@inertiajs/vue3';

const props=defineProps({ items: Object })


</script>

<template>
    <Head title="Items" />

    <GuestLayout>
    

        <div class="bg-white  w-full ">
  <div class=" w-full  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Products</h2>
    <div class="  mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                
                <Card  :href="route('items.show',item.id)" v-for="item in items" :key="item.id" :item="item" />
            </div>
        </div>
    </div>


    </GuestLayout>
</template>
