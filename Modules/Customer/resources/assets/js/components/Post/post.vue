<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUpdated, onBeforeMount, onBeforeUnmount } from 'vue';

import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import InputTextarea from 'primevue/textarea';
import { toast } from '@/components/ui/toast';
import { MessageCircle, Send, ThumbsUp, X } from 'lucide-vue-next';
import { useForm, usePage } from '@inertiajs/vue3';
import CommentInput from '@customer/js/components/Post/form/post.vue'

import type { Post } from "@customer/js/types/post"
import moment from 'moment'
import axios from 'axios';

import Button from '@/components/ui/button/Button.vue';

import Timeline from 'primevue/timeline';
import { useDelete } from '@/Composables/actions/delete';
import { destroy } from '@/actions/Modules/Customer/Http/Controllers/PostController';
import { useI18n } from 'vue-i18n';
import { usePostStore } from '@customer/js/Stores/Post';
import { watch } from 'vue';
import { useItemStore } from '@vendor/js/Stores/Item';
import ItemController from '@/actions/Modules/Vendor/Http/Controllers/ItemController';




const props = defineProps({
  post: {
  
    required: true,
  },
});

const { t } = useI18n();



const postStore = usePostStore();


const onDelete = (postId: number,parentPost?:number,parentComment?:number) => {
    
    useDelete('post.destroy', postId, t, [''],()=>{
        postStore.fetchPosts(parentPost,parentComment)
        
    });
  
  
  }

  const onPreviewItem = async (itemId : string) => {
 
 
  
    const itemStore = useItemStore();
            
        const show = ItemController.show(itemId) 
        await axios.get(show.url).then(res => {itemStore.changeItemInDrawer(res.data)})
   
}


// onMounted(function () {
//   const item_mentions = document.getElementsByClassName('item-mention');

// Array.from(item_mentions).forEach(element => {
//   // You can use a data attribute like data-code="ABC123"
//   const itemId = element.getAttribute('data-item') as string;

//   element.addEventListener('click', () => {
//     onPreviewItem(itemId);
//   });
// });

  
// });




function attachMentionListeners(root = document) {
  const item_mentions = root.getElementsByClassName('item-mention');
  Array.from(item_mentions).forEach((element) => {
    const itemId = element.getAttribute('data-item');
    if (!itemId || element.getAttribute('data-bound') === 'true') return;

    element.setAttribute('data-bound', 'true'); // avoid duplicate listeners
    element.addEventListener('click', () => onPreviewItem(itemId));
  });
}

onMounted(() => {
  // Attach to existing mentions
  attachMentionListeners();

  // Watch for future mentions added to DOM
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches('.item-mention')) {
             
              attachMentionListeners(node.parentElement ?? node);
            } else if (node.querySelector?.('.item-mention')) {
             
              attachMentionListeners(node);
            }
          }
        });
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});








</script>

<template>

    

<Card class="p-4 rounded-lg shadow-md ">

  <template #content>
    <div id="comments-container">

      
   
    <span class="absolute right-[10%]">
      <X v-if="postStore.checkIfAuthUserHasThisPost(post.user.id)" cursor="pointer" :size="20" @click="onDelete(post.id)" />

    </span>
    <div class="flex items-center mb-4">

      <Avatar :image="post.user?.avatar" shape="circle" class="mr-3"  />
      <div>

        <h3 class="font-semibold">{{ post.user.name }}</h3>
        <p class="text-sm text-gray-500">{{ moment(post.updated_at).fromNow() }}</p>
      </div>
    </div>
    <p class="mb-4" v-html="post.content" ></p>


    <div class="flex items-center justify-end gap-2 ">

      <Button @click="post.likes.length > 0 ? postStore.unlike(post.id) : postStore.like(post.id)"
        class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500" size="sm"
        :class="{ 'text-green-500 bg-white': post.likes.length > 0 }">
        {{ post.likes_count }}
        <ThumbsUp :size="20" />


      </Button>
      <Button @click="postStore.toggleCommentIntent(post.id)" cursor="pointer" size="sm"
        class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500">
        {{ post.comments_count }}
        <MessageCircle :size="20" />


      </Button>


    </div>



    <!-- Comments Section -->
    <div class="mt-4">
      <div v-show="post.commentIntent" v-for="comment in post.comments" :key="comment.id"
        class="flex items-start mb-3">
        <Avatar :image="comment.user.avatar" shape="circle" class="mr-2" size="small" />
        <div class="w-full px-3 py-2 bg-gray-100 rounded-xl">
          <span class="absolute right-[13%]  ">
            <X v-if="postStore.checkIfAuthUserHasThisPost(comment.user.id)" cursor="pointer" :size="20" @click="onDelete(comment.id,post.id)" />

          </span>
          <div class="flex gap-3">
            <p class="text-sm font-semibold">{{ comment.user.name }}</p>
            <p class="text-sm text-gray-500">{{ moment(comment.updated_at).fromNow() }}</p>

          </div>
          <p class="text-sm" v-html="comment.content" ></p>

          <div class="flex items-center justify-end gap-2 m-3">
            <Button @click="comment.likes.length > 0 ? postStore.unlike(post.id, comment.id) : postStore.like(post.id, comment.id)"
              class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500 " size="sm"
              :class="{ 'text-green-500 bg-white': comment.likes.length > 0 }">
              {{ comment.likes_count }}
              <ThumbsUp :size="20" />


            </Button>
            <Button @click="postStore.toggleCommentIntent(post.id, comment.id)"
              class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500" size="sm">
              {{ comment.comments_count }}
              <MessageCircle :size="20" />


            </Button>



          </div>

          <div>
            <ul class="relative ml-6 border-l-2 border-gray-300">
              <li v-if="comment.commentIntent" v-for="reply in comment.comments" :key="reply.id"
                class="relative mb-6 ml-3 bg-white ">
                <!-- Dot/Avatar -->
                <span
                  class="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-green-400 rounded-full -left-6 top-2">
                  <Avatar :image="reply.user.avatar" shape="circle" size="small" />
                </span>

                <!-- Content box -->
                <div class="px-4 py-3 shadow-sm rounded-xl">
                  <span class="absolute right-3">
                    <X  v-if="postStore.checkIfAuthUserHasThisPost(reply.user.id)" cursor="pointer" :size="20" @click="onDelete(reply.id,post.id,comment.id)" />

                  </span>
                  <div class="flex items-center mb-1 ">
                    <p class="text-sm font-semibold">{{ reply.user.name }}</p>
                    <p class="text-xs text-gray-500 ms-2">{{ moment(reply.updated_at).fromNow() }}</p>
                  </div>
                  <p class="text-sm text-gray-800" v-html="reply.content"  ></p>

                  <!-- Action buttons -->
                  <div class="flex items-center justify-end gap-2 mt-3" >
                    <Button
                      @click="reply.likes.length > 0 ? postStore.unlike(post.id, comment.id, reply.id) : postStore.like(post.id, comment.id, reply.id)"
                      class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500" size="sm"
                      :class="{ 'text-green-500 bg-white': reply.likes.length > 0 }">
                      {{ reply.likes_count }}
                      <ThumbsUp :size="20" />
                    </Button>

                    <Button @click="postStore.onReply(post.id, comment.id, reply.user.username)"
                      class="text-gray-800 bg-slate-100 hover:bg-white hover:text-green-500" size="sm">
                      {{$t('Reply')}}
                    </Button>
                  </div>
                </div>
              </li>
            </ul>


            <CommentInput v-show="comment.commentIntent" @commentAdded="postStore.onComment" :postId="comment.id"
              :grandPostId="post.id" :mention="comment.mention" :placeholder="$t('Write a reply...')" />

          </div>

        </div>
      </div>

      <CommentInput @commentAdded="postStore.onComment" v-show="post.commentIntent" :postId="post.id"
        :placeholder="$t('Write a comment...')" />
    </div>

    </div>
  </template>

</Card>




</template>