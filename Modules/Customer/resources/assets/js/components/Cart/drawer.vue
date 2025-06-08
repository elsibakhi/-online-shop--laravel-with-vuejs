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
import { Minus, Plus, ShoppingCart, X } from 'lucide-vue-next'
import { ref ,computed, watch,watchEffect} from 'vue'
import DefualtImage from '@vendor/images/items/default/item.png'
import { useCartStore } from '@customer/js/Stores/Cart'
import { useToast } from '@/components/ui/toast/use-toast'
import {useI18n} from 'vue-i18n'
import Toaster from '@/components/ui/toast/Toaster.vue'
import { usePage } from '@inertiajs/vue3'

const page =usePage();
const {t}=useI18n();
const cartStore = useCartStore();
cartStore.addT(t);


cartStore.loadCart();


const { toast } = useToast()
const cartItems = computed(() => cartStore.items);
const totalPrice = computed(() => cartStore.totalPrice);
const cartCount = computed(() => cartStore.totalItems);

const checkout = () => {
  cartStore.checkoutFromBalance();
}
const clearCart = () => {
  cartStore.clearCart();
}


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
    <DrawerContent class="fixed left-0 w-1/3 h-full ">
      <div class="flex flex-col w-full max-w-sm m-10 mx-auto space-y-4">
        <DrawerHeader>
          <DrawerTitle>{{$t('My Cart')}}</DrawerTitle>
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


        <div class="flex justify-between mt-4 space-x-4">
          <Button :disabled="cartCount<1||cartStore.checkoutForm.validating||cartStore.isCartItemsTotalPriceExceedUserBalance" @click="checkout">{{$t('Checkout')}}</Button>
          <Button  :disabled="cartCount<1" variant="outline" @click="clearCart">{{$t('Clear Cart')}}</Button>
        </div>
      </div>
    </DrawerContent>

  </Drawer>
  <!-- <Toaster /> -->
</template>