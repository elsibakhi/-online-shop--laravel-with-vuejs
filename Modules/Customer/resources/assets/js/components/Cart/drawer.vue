 <script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import SpeedDial from 'primevue/speeddial';
import { Minus, Plus, ShoppingCart, X } from 'lucide-vue-next'
import { ref ,computed, watch,watchEffect} from 'vue'
import DefualtImage from '@vendor/images/items/default/item.png'
import { useCartStore } from '@customer/js/Stores/Cart'
import { useToast } from '@/components/ui/toast/use-toast'
import {useI18n} from 'vue-i18n'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { usePage } from '@inertiajs/vue3'
// import { Component } from 'vue'
import {Wallet,DoorOpen} from 'lucide-vue-next'
const page =usePage();
const {t}=useI18n();
const cartStore = useCartStore();
cartStore.addT(t);


cartStore.loadCart();


const { toast } = useToast()
const cartItems = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.totalPrice);
const cartCount = computed(() => cartStore.totalItems);


const clearCart = () => {
  cartStore.clearCart();
}


const checkoutMethods = ref([
    {
        label: 'From Wallet',
        icon: Wallet,
        command: () => {
          if(cartCount.value<1||cartStore.checkoutForm.validating||cartStore.isCartItemsTotalPriceExceedUserBalance){
            toast({title:t('You do not have enough balance to complete this transaction.')})
          }else{
            cartStore.checkoutFromBalance();
          }
        } 
    },
    {
        label: 'From Stripe',
        icon: DoorOpen,
        command: () => {
          
        }
    }
])

// watchEffect(() => {
//   const errors =  cartStore.checkoutForm.errors;

//   for (const key in errors) {
//     if (errors[key]) {
      
//       toast({
//         title: errors[key],
//       });
//     }
//   }
// });
   
// watchEffect(() => {
//   const errors = page.props.errors;

//   for (const key in errors) {
//     if (errors[key]) {
      
//       toast({
//         title: errors[key],
//       });
//     }
//   }
// });

</script>

<template>
  <Drawer direction="left" :open="cartStore.cartVisibility" @close="cartStore.closeDrawer" >
    <DrawerTrigger as-child>
      <Button  @click="cartStore.openDrawer" variant="outline" class="fixed bg-black rounded-full bottom-10 right-10 text-stone-200">
        <ShoppingCart class="w-4 h-4" />
      </Button>
    </DrawerTrigger>
    <DrawerContent class="fixed left-0 w-full h-full p-1 overflow-auto md:w-1/2 sm:w-2/3 ">
      <div class="flex flex-col w-full max-w-sm m-10 mx-auto space-y-4">
        <DrawerHeader>
          <div class="flex justify-between">

            
            <DrawerTitle>{{$t('My Cart')}}</DrawerTitle>
            <Button  :disabled="cartCount<1" variant="outline" @click="clearCart">{{$t('Clear Cart')}}</Button>
          </div>
        </DrawerHeader>

        <div v-if="cartItems.length === 0" class="text-center text-gray-500">
          {{$t('Cart is empty')}}
        </div>

        <div v-else class="space-y-4">
 
          <template v-for="item in cartItems" :key="item.id">
  <div class="relative p-4 bg-white border rounded-lg shadow-sm">

    <!-- زر الحذف (X) في الزاوية -->
    <Button
      size="icon"
      variant="ghost"
      class="absolute text-red-500 top-2 right-2 hover:text-red-700"
      @click="cartStore.removeItem(item.id)"
    >
      <X/>
    </Button>

    <div   :class="[
    'flex items-center space-x-4 p-2 rounded-md transition',
    item.status !== 'available' && 'opacity-50 pointer-events-none select-none grayscale line-through'
  ]">
      <!-- صورة المنتج -->
      <img
        :src="item.image_path ? 'storage/' + item.image_path : DefualtImage"
        alt=""
        class="object-cover w-16 h-16 rounded-md"
      />

      <!-- تفاصيل المنتج -->
      <div class="flex-1">
        <div class="text-base font-semibold">{{ item.title }}</div>
        <div class="text-sm text-gray-600">{{ $t('Unit Price') }}: {{ item.price }}</div>
        <div class="text-sm text-gray-600">{{ $t('Available quantity') }}: {{ item.remaining_quantity }}</div>
        <div class="text-sm text-gray-600">{{ $t('discount') }}: {{ item.discount*100 }}%</div>

        <!-- التحكم بالكمية -->
        <div class="flex items-center mt-2 space-x-2">
          <Button size="sm" variant="outline" @click="cartStore.addOrUpdateItem(item.id, -1 )"><Minus/></Button>
          <span class="w-6 text-sm font-medium text-center">{{ item.quantity }}</span>
          <Button size="sm" variant="outline" @click="cartStore.addOrUpdateItem(item.id, +1)"><Plus/></Button>
        </div>
      </div>

      <!-- السعر الإجمالي -->
      <div class="font-semibold">
        {{ ((item.price * item.quantity)-(item.price * item.quantity* item.discount)).toFixed(2) }}
      </div>
    </div>
  </div>
  
</template>            



          <div class="flex justify-between pt-2 text-lg font-bold border-t">

            <span>{{$t('Total Price')}}</span>
            <span>{{ totalPrice.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between pt-2 text-lg font-bold border-t">
            <span>{{$t('Total Quantity')}}</span>
            <span>{{ cartCount}}</span>
          </div>
          
        </div>


        <div class="w-full ">


          <SpeedDial
          v-if="cartCount>0"
  :model="checkoutMethods"
  direction="right"
  :transitionDelay="80"
  pt:menuitem="m-2"
>
  <!-- زر فتح السايد بار -->
  <template #button="{ toggleCallback }">
    <Button @click="toggleCallback">
      {{ $t('Checkout') }}
    </Button>
  </template>

  <!-- عنصر داخل قائمة SpeedDial -->
  <template #item="{ item, toggleCallback }">
    <div
      class="flex items-center justify-center gap-2 p-3 transition border rounded-lg cursor-pointer w-50 hover:bg-gray-100 dark:hover:bg-gray-800 border-surface-200 dark:border-surface-700"
      @click="toggleCallback" 
    >
      <!-- أيقونة -->
      <component :is="item.icon" class="w-6 h-6" />

      <!-- عنوان -->
      <span class="text-sm text-center">
        {{ item.label }}
      </span>
    </div>
  </template>
</SpeedDial>

          
          
        </div>
      </div>
    </DrawerContent>

  </Drawer>
  <!-- <Toaster /> -->
</template>