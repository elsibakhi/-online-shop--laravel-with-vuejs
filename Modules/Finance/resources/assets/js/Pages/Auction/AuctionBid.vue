<template>

  <Card class="container p-4 mx-auto mt-10 space-y-6">
    <CardHeader>
      <h1 class="mb-4 text-2xl font-bold">Auction #{{ auction.id }} — {{ auction.status }}</h1>


    </CardHeader>
    <CardContent>

      <div class="flex flex-col justify-evenly md:flex-row">
        <div class="p-6 md:w-1/2">



          <div class="mb-4">Current Price: <span class="font-semibold text-green-600">${{ currentPrice }}</span></div>

          <div class="p-4 mb-6 border rounded-lg shadow">
            <div class="flex items-start justify-between">
              <div>
                <img :src="item.extensions[0]?.path?'/storage/' + item.extensions[0].path:defaultImage" alt="" class="object-cover w-32 h-32 rounded" />
                <h2 class="font-medium">{{ item.title }}</h2>
                <p class="text-sm text-gray-600">{{ item.description }}</p>
              </div>
              <div class="flex flex-col items-end gap-2">
                <NumberField class="gap-2" v-model="form.amount" :min="currentPrice + 1" :max="userBalance"
                  :format-options="{
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'code',
                    currencySign: 'accounting',
                  }">
                  <NumberFieldContent>
                    <NumberFieldDecrement />

                    <NumberFieldInput />

                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>


              </div>
            </div>
            <div class="flex flex-col items-end justify-center gap-2 mt-4">
              <ShadcnButton @click="submitBid"
                :disabled="form.amount <= currentPrice || form.amount > userBalance || remainingSeconds <= 0"
                variant="default" class=" group">

                Place Bid
                <HandCoins />
              </ShadcnButton>

              <p v-if="form.amount > userBalance" class="text-xs text-red-600">Insufficient balance</p>
            </div>

          </div>
        </div>


        <div>

          <ul>
            <Label class="font-bold text-md">Active Users</Label>

            <li class="ml-5 list-disc" v-for="u in usersInAuctionNow">{{ u.username == user.username ? "You" : user.name
              }}
            </li>
          </ul>

        </div>

      </div>





    </CardContent>

    <CardFooter>
      <div class="flex justify-between w-full">
        <Link :href="route('dashboard')" class="w-20">
        <ShadcnButton variant="outline" class="w-20 group">

          Back
          <Undo2 class="group-hover:translate-x-1" />
        </ShadcnButton>
        </Link>

        <div class="mb-2 text-lg font-medium text-zinc-900" :class="{ 'text-red-600': remainingSeconds < 10 }">
          Time Remaining: <span>{{ formattedTime }}</span>
        </div>

        <div v-if="remainingSeconds == 0 && youAreWinner">
          You are the winner
        </div>
      </div>
    </CardFooter>
  </Card>

  <Toaster />
</template>

<script setup>
import { ref, onMounted, reactive, computed, onUnmounted, watch, onBeforeUnmount } from 'vue';
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
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import ShadcnButton from '@/components/ui/button/Button.vue'
import { HandCoins, Undo2 } from 'lucide-vue-next';
import { useI18n } from 'vue-i18n';
import { bid } from '@/actions/Modules/Finance/Http/Controllers/BidController';
import { useToast } from '@/components/ui/toast';
import Toaster from '@/components/ui/toast/Toaster.vue';
import Label from '@/components/ui/label/Label.vue';
import defaultImage from "@vendor/images/items/default/item.png"


const props = defineProps([
  'auction', 'youAreWinner', 'now','availableBalance'
]);
const page = usePage();
const errors = computed(() => page.props.errors);
const user = page.props.auth.user;
const auction = props.auction;
const item = auction.item;
const userBalance = props.availableBalance;
const currentPrice = ref(auction.current_price);
const youAreWinner = ref(props.youAreWinner);
const usersInAuctionNow = ref([]);

console.log(props.availableBalance)

const form = useForm({
  amount: auction.current_price + 1,
})

watch(
  errors,
  (newErrors) => {
    if (newErrors) {
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
const { t } = useI18n();
const { toast } = useToast();

// Convert end_time (e.g., "17:00:00") into a Date object


const now = new Date(props.now);

const endsAt = new Date(auction.end);

const remainingSeconds = ref(Math.floor((endsAt - now) / 1000));
if (remainingSeconds.value < 0) remainingSeconds.value = 0; // if passed, it's for tomorrow



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


// For handle exist user from this page
window.addEventListener('beforeunload', function () {
  if (confirm("Are you sure you want leave this session?")) {
    location.reload()
  }
})
onBeforeUnmount(() => {
  if (confirm("Are you sure you want leave this session?")) {
    location.reload()
  }

})
onUnmounted(() => {

  clearInterval(interval);
  Echo.leave(`Auction.${auction.id}`);
});

watch(() => form.amount, function (newAmount) {

  publishChangingAmountClientEvent(newAmount);
}, { deep: true })

// Listen for real-time updates
Echo.private('auction.' + auction.id)
  .listen('BidPlaced', (e) => {
    currentPrice.value = e.currentPrice;
    auction.current_price = e.currentPrice;
  });

const auctionGroupChannel = Echo.join(`Auction.${auction.id}`)
  .listen('.UserMakeBid', (e) => {
    // currentPrice.value = e.currentPrice;
    // auction.current_price = e.currentPrice;
    form.amount = e.bid.amount + 1;
    currentPrice.value = e.bid.amount;

    if (user.id != e.bid.user.id) {
      youAreWinner.value = false;
      toast({ title: t('The current price is now ' + e.bid.amount + ' and increased by ' + e.bid.user.name) })
    } else {
      youAreWinner.value = true;
    }

  })

  .here((users) => {

    usersInAuctionNow.value = users;

  })

  .joining((user) => {

    usersInAuctionNow.value.push(user);


  })

  .leaving((user) => {

    usersInAuctionNow.value = usersInAuctionNow.value.filter(function (u) {
      return u.username != user.username
    }
    );


  })

  .error((error) => {

    console.error(error);

  }).listenForWhisper('ChangingAmountClientEvent', (e) => {

    toast({ title: t(e.name + ' changed his/her offer'), description: t('The new amount now ' + e.amount + ', but he/she did not confirm it') })
    console.log(e.name);

  })
  ;

function publishChangingAmountClientEvent(amount) {
  auctionGroupChannel

    .whisper('ChangingAmountClientEvent', {

      name: user.name,
      amount: amount

    });


}

function submitBid() {

  form.submit(bid(auction.id, {

    onSuccess: function () {
      toast({ title: t('You add a bid successfully.') })
    }
  }))
}

</script>
