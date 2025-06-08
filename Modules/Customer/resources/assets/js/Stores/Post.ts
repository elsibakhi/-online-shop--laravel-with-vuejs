import { ref, reactive, computed } from 'vue';

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
import { destroy, load, loadPost, store } from '@/actions/Modules/Customer/Http/Controllers/PostController';
import { useI18n } from 'vue-i18n';
import { defineStore } from 'pinia';





export const usePostStore = defineStore('post', () => {
  
    const posts = ref<Post[]>([]);
    const page = usePage();
  
    const next_page_url = ref(load().url+`?page=1`);
    const locked = ref(false);

   async function fetchPosts(type?: 'posts'|'timeline'){

   
    // if i switch from posts to timeline and  verca vice
    if (!locked.value) {

        locked.value = true;

        if(type){
        

            posts.value =[];
              
            next_page_url.value=load(type).url+`?page=1`;
    
        }
    
    
          //load posts as pages in case of index page 
    
          if(next_page_url.value){
          await  axios.get(next_page_url.value).then((response) => {
      
              let returnedPosts = response.data.data;
      
              //get next page url from paginate response if there is no pages it return null
              next_page_url.value =response.data.next_page_url;
              //append the returned posts with overall posts
              posts.value.push(...returnedPosts);
      
               
            
       
             })
          }
    


        locked.value = false;
      
    }



    

    }


  
    async function fetchPost(postId: number){

   
      if(postId){
      
        //load one post in case of show page 
        next_page_url.value=null;
  
        axios.get(loadPost(postId).url).then((response) => {
    
          let returnedPost = response.data;
  
          posts.value=[];
          if(returnedPost){
            posts.value.push(returnedPost);
  
          }
       
        
   
         })
  
      }
  
      }
    

    const like = (postId: number, commentId: number = 0, replyId: number = 0) => {
      const post = posts.value.find((p: Post) => p.id === postId);
      if (post) {
        if (commentId) {
          const comment = post.comments?.find((c: Post) => c.id === commentId);
          if (comment) {
            if (replyId) {
              const reply = comment.comments?.find((r: Post) => r.id === replyId);
              if (reply) {
                axios.post(route('post.like', replyId)).then(function () {
                  reply.likes_count++;
                  reply.likes.push({});
                })
              }
            } else {
              axios.post(route('post.like', commentId)).then(function () {
                comment.likes_count++;
                comment.likes.push({});
              })
            }
    
    
          }
        }
        else {
    
          axios.post(route('post.like', postId)).then(function () {
            post.likes_count++;
            post.likes.push({});
    
    
          })
        }
    
    
      }
    };
    
    const unlike = (postId: number, commentId: number = 0, replyId: number = 0) => {
    
      const post = posts.value.find((p: Post) => p.id === postId);
      if (post) {
    
    
    
    
        if (commentId) {
    
    
          const comment = post.comments?.find((c: Post) => c.id === commentId);
          if (comment) {
    
            if (replyId) {
              const reply = comment.comments?.find((r: Post) => r.id === replyId);
              if (reply) {
                axios.post(route('post.unlike', replyId)).then(function () {
                  reply.likes_count--;
                  reply.likes = [];
    
    
                })
              }
            } else {
              axios.post(route('post.unlike', commentId)).then(function () {
                comment.likes_count--;
                comment.likes = [];
    
    
              })
            }
          }
        } else {
    
          axios.post(route('post.unlike', postId)).then(function () {
            post.likes_count--;
            post.likes = [];
    
    
          })
        }
    
    
      }
    
    };
    
    const toggleCommentIntent = (postId: number, commentId: number = 0) => {
      const post = posts.value.find((p: Post) => p.id === postId);
      if (post) {
    
        if (commentId) {
          const comment = post.comments?.find((c: Post) => c.id === commentId);
          if (comment) {
            comment.commentIntent = comment.commentIntent ? !comment.commentIntent : true;
          }
    
        } else {
    
          post.commentIntent = post.commentIntent ? !post.commentIntent : true;
        }
    
      }
    };
    
    
    const onComment = function (postId: number, commentId?: number) {
    
       
      const post = posts.value.find((p: Post) => p.id === postId);
    
      if (post) {
        // open post comments after adding a comment
        post.commentIntent = true;
    
        if(commentId){
          const comment = post.comments?.find((c: Post) => c.id === commentId);
          if (comment) {
            comment.commentIntent = true;
          }
        }
     
    
    
    
      }
    
      
    }
    
    
    const onReply = (postId: number, commentId: number, mention: string) => {
    
      const post = posts.value.find((p: Post) => p.id === postId);
      if (post) {
        // open post comments after adding a comment
        const comment = post.comments?.find((c: Post) => c.id === commentId);
        if (comment) {
    
          comment.mention = mention;
          setTimeout(() => comment.mention = '', 100)
    
        }
    
      }
    
    
    
    }
    
    
    
    
    

 
    
    function checkIfAuthUserHasThisPost(userId: number){
      return page.props.auth.user.id===userId;
    }
  
  
    function addPost(newPost: Post,toPostId?:number,toCommentId?:number){
     
     
      if(toPostId){
       
        const post = posts.value.find((p: Post) => p.id === toPostId);
        if(post){
          if(toCommentId){
           
            const comment = post.comments?.find((c: Post) => c.id === toCommentId);
              if(comment){
                comment.comments?.push(newPost);
              }

          }else{

            post.comments?.push(newPost);
          }

      

        }
      

      }else{

        posts.value.unshift(newPost);
      }

        
    }



    
   

  
  return {
    posts,
    fetchPosts,
    fetchPost,
    like,
    checkIfAuthUserHasThisPost,
    onReply,
    onComment,
    toggleCommentIntent,
    unlike,
    addPost
  };
});

