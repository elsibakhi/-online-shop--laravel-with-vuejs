<script setup lang="ts">

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import {Rating} from "@customer/js/types/rating"

import { defineProps,ref, watch } from 'vue'









import { Star } from 'lucide-vue-next'
import axios from 'axios';
import { load } from '@/actions/Modules/Customer/Http/Controllers/RatingController';
import Avatar from '@/components/ui/avatar/Avatar.vue';







const props = 
  defineProps({
    item: {
    type: Object,
    required: true
  },
    open: {
    type: Boolean,
    default: false
  },
  
  });

  




const isOpen = defineModel('open')
const ratings = ref<Rating[]>([]);
const loading = ref(false);
const nextLoadingUrl = ref<string|null>(null);




watch(()=>props.item,async function(newItem){
   if(newItem){
    nextLoadingUrl.value=load(newItem.id).url+'?page=1';
    ratings.value=[]
    fetchRatings()

   }
  
},{deep:true})

async function fetchRatings(){
   if(nextLoadingUrl.value){
    loading.value=true;
    const response = await  axios.get(nextLoadingUrl.value);
    ratings.value.push(...response.data.data)
    nextLoadingUrl.value=response.data.links.next;
 
    loading.value=false;

   }
  
}


const onScroll =function(event){
       
       const bottom= event.target.scrollHeight <= (event.target.scrollTop + event.target.clientHeight+1);

       if(bottom && !loading.value){
  console.log('scrolled')

  fetchRatings()

 
}
    

}



</script>

<template>
  <Toaster />
  <Dialog  v-model:open="isOpen"   >

    
    <DialogContent   >
      <DialogHeader>
        <DialogTitle>
    
          <span >{{ $t('The Ratings On This Item') }}</span>
         
        
          
        </DialogTitle>

      </DialogHeader>
<div class="overflow-auto card" style="max-height: 80vh;" @scroll="onScroll" >
  

      <div v-for="rating in ratings" class="p-2 m-2 border rounded">
        
    
  <div  class="flex items-center mb-4">

<Avatar :image="rating.user.avatar" shape="circle" class="mr-3"  />
<div class="flex justify-between w-full">

             <h3 class="font-semibold">{{ rating.user.name }}</h3>
                 <div class="p-1 bg-surface-100" style="border-radius: 30px">
                                        <div class="flex items-center justify-center gap-2 px-2 py-1 bg-surface-0" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">

                                            <Star v-for="n in 5" class="text-gray-400" :class="{'text-orange-400':rating.rating>=n}" :size="15"  />
                                        </div>
                                    </div>
</div>
</div>
<p class="mb-4" v-if="rating.note"  >
  {{ rating.note}}
</p>
<p class="mb-4 text-gray-600" v-else  >
  There is no any notes here! 
</p>
</div>
</div>

<div class="mb-4 text-gray-600 " v-if="ratings.length==0"> There is no any ratings on this item!</div>
  
    </DialogContent>
  </Dialog>

<Toaster />
</template>