<template>

<Card class="max-w-xl p-4 mx-auto mt-10 space-y-6">
    <CardHeader >
        <h1 class="mb-4 text-2xl font-bold">Auction #{{ auction.id }} — {{ auction.status }}</h1>

     
    </CardHeader> 
    <CardContent>

        <div class="p-6">
      

     
      <div class="mb-4">Current Price: <span class="font-semibold text-green-600">${{ currentPrice }}</span></div>
  
      <div  class="p-4 mb-6 border rounded-lg shadow">
        <div class="flex items-start justify-between">
          <div>
            <img :src="'/storage/'+item.extensions[0].path" alt="" class="object-cover w-32 h-32 rounded" />
            <h2 class="font-medium">{{ item.title }}</h2>
            <p class="text-sm text-gray-600">{{ item.description }}</p>
          </div>
          <div class="flex flex-col items-end gap-2">
            <NumberField
          class="gap-2"
               v-model="form.amount"
              :min="currentPrice + 1"
              :max="userBalance"
           
              :format-options="{
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'code',
      currencySign: 'accounting',
    }"
        
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
          
              <NumberFieldInput />
         
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>

     
          </div>
        </div>
        <div class="flex flex-col items-end justify-center gap-2 mt-4">
            <ShadcnButton    @click="submitBid" :disabled="form.amount <= currentPrice || form.amount > userBalance || remainingSeconds<=0"  variant="default" class=" group">
                       
                       Place Bid
                                  <HandCoins/>
                                        </ShadcnButton>
                  
                       <p v-if="form.amount > userBalance" class="text-xs text-red-600">Insufficient balance</p>
        </div>
       
      </div>
    </div>
  


     
    </CardContent>

    <CardFooter>
        <div class="flex justify-between w-full">
            <Link :href="route('dashboard')" class="w-20">
        <ShadcnButton  variant="outline" class="w-20 group">
                       
                       Back
                       <Undo2 class="group-hover:translate-x-1"/>
                             </ShadcnButton>
      </Link>
     
      <div class="mb-2 text-lg font-medium text-zinc-900" 
  :class="{'text-red-600': remainingSeconds < 10 }"
            >
  Time Remaining: <span>{{ formattedTime }}</span>
    </div>

    <div v-if="remainingSeconds==0 && youAreWinner">
    You are the winner
    </div>
    </div>
    </CardFooter>
  </Card>
  
  <Toaster/>
  </template>
  
  <script setup>
  import { ref, onMounted, reactive, computed, onUnmounted, watch } from 'vue';
//   import { Inertia } from '@inertiajs/inertia';
  import { Link, useForm, usePage } from '@inertiajs/vue3';
  import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'
  import Button from 'primevue/button';
  import { Card, CardContent,CardHeader ,CardFooter } from '@/components/ui/card'
import ShadcnButton from '@/components/ui/button/Button.vue'
import { HandCoins, Undo2 } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { bid } from '@/actions/Modules/Finance/Http/Controllers/BidController';
import { useToast } from '@/components/ui/toast';
import Toaster from '@/components/ui/toast/Toaster.vue';



  const props = defineProps([
    'auction','youAreWinner','now'
  ]);
  const page =usePage();
  const errors = computed(() => page.props.errors );
  const user = page.props.auth.user;
  const auction = props.auction;
  const item = auction.item;
  const userBalance = user.balance;
  const currentPrice = ref(auction.current_price);
  const youAreWinner=ref(props.youAreWinner);
const form =useForm({

    
      amount: auction.current_price+1,
})
  
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
  const {t}=useI18n();
 const {toast}=useToast();

  // Convert end_time (e.g., "17:00:00") into a Date object
  

const now = new Date(props.now);

const endsAt = new Date(auction.end);

const remainingSeconds = ref(Math.floor( (endsAt- now) / 1000));
if (remainingSeconds.value<0) remainingSeconds.value=0; // if passed, it's for tomorrow



const formattedTime = computed(() => {
  const h = String(Math.floor(remainingSeconds.value / 3600)).padStart(2, '0');
  const m = String(Math.floor((remainingSeconds.value % 3600) / 60)).padStart(2, '0');
  const s = String(remainingSeconds.value % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
});

let interval = null;
onMounted(() => {
  interval = setInterval(() => {
    if (remainingSeconds.value > 0) {
      remainingSeconds.value--;
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(interval);
});
 

  // Listen for real-time updates
  Echo.private('auction.' + auction.id)
    .listen('BidPlaced', (e) => {
      currentPrice.value = e.currentPrice;
      auction.current_price = e.currentPrice;
    });
  
    Echo.join(`Auction.${auction.id}`)
    .listen('.UserMakeBid', (e) => {
      // currentPrice.value = e.currentPrice;
      // auction.current_price = e.currentPrice;
      form.amount=e.bid.amount+1;
      currentPrice.value=e.bid.amount;
      
      if(user.id!=e.bid.user.id){
        youAreWinner.value=false;
        toast({title:t('The current price is now '+e.bid.amount+' and increased by '+e.bid.user.name)})
      }else{
        youAreWinner.value=true;
      }
      
    })
    .here((users) => {

        // ...

    })

    .joining((user) => {

        console.log(user.name);

    })

    .leaving((user) => {

        console.log(user.name);

    })

    .error((error) => {

        console.error(error);

    });

  function submitBid() {
    
    form.submit(bid(auction.id,{
      
      onSuccess:function(){
        toast({title:t('You add a bid successfully.')})
      }
    }))
  }

  </script>
  

