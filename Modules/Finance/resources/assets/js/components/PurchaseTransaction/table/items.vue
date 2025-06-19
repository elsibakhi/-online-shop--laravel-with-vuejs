<script setup lang="ts">

const props = defineProps(['items']);

</script>

<template>

<ul>
    <li v-for="item in items" :key="item.id">{{ item.title }}</li>
</ul>

</template>