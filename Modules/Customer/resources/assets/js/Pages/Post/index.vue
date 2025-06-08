<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, usePage } from '@inertiajs/vue3';
import Modal from '@/components/form/modal.vue';


import type { Category } from '@admin/types/Category';
import { getColumns } from '@admin/Components/Category/table/columns';
import DataTable from '@/components/DataTable.vue';
import FormFields from '@admin/Components/Category/form/fields.vue';
   import ItemPreviewDrawer from "@vendor/js/Components/Item/show/preview.vue"
import { onMounted, ref, watch, provide, computed } from 'vue'

import { watchEffect } from 'vue';
import { toast } from '@/components/ui/toast';
import { reactive } from 'vue';
import * as z from 'zod'
import { useI18n } from 'vue-i18n'
import { useSetRouteAsActive } from '@/Composables/sidebar/setRouteAsActive';
import PostCard from '@customer/js/components/Post/post.vue';
import type { Post } from "@customer/js/types/post"


import Card from 'primevue/card';

import PostInput from '@customer/js/components/Post/form/post.vue'
import { usePostStore } from '@customer/js/Stores/Post';

// // set route item as active in sidebar
useSetRouteAsActive("post")

// if i need to show one post just
const props = defineProps({ 
  postId:{
    type:Number,
    default:null
  }  ,
   type: {
    type:String,
    default:'posts'
  } 
   })



const postStore = usePostStore();

const posts = computed(() => postStore.posts)


const page = usePage()
// Ensure message is always a string or undefined
const message = computed(() => page.props.message as string | undefined)

if (message.value) {
  toast({ title: message.value })
}



const loadMorePosts = () => {

 

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    if ((scrollTop + windowHeight) >= (fullHeight - 10)) {
      
      postStore.fetchPosts()
    }
  

}

onMounted(() => {

  window.addEventListener('scroll', loadMorePosts)

  if(props.postId){
    
    postStore.fetchPost(props.postId)
}else{
  
  postStore.fetchPosts(props.type as 'posts'|'timeline')
}


})


</script>

<template>

  <Head :title="$t('View My Posts')" />

  <AuthenticatedLayout :breadcrumb-titles="[{ title: $t('Posts') },]" @scroll="loadMorePosts">
  

    <div class="py-10 mx-20 container-fluid ">

      <Card v-if="!postId" class="p-4 mb-6">
        <template #content>
          <PostInput :label="$t('What\'s on your mind?')" type="post" />
        </template>

      </Card>

      <div class="container py-10 mx-auto">
        <!-- Create Post Box -->

        <PostCard v-if="posts.length > 0" v-for="post in posts" :key="post.id" :post="post" />
        <div v-if="posts.length === 0" class="text-center text-gray-500">
          <p>{{ $t('No posts found') }}</p>
        </div>
      </div>

    </div>

  <ItemPreviewDrawer />
  </AuthenticatedLayout>
</template>
