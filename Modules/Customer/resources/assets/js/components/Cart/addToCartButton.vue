<script setup lang="ts">
import { add } from '@/actions/Modules/Customer/Http/Controllers/CartController';
import Button from '@/components/ui/button/Button.vue';
import { ShoppingCart } from 'lucide-vue-next';
import {router} from "@inertiajs/vue3"
import { useCartStore } from '@customer/js/Stores/Cart';
import {useI18n} from 'vue-i18n'
const props = defineProps({
  itemId: {
    type: Number,
    required: true,
  },
});

const {t}=useI18n();
const cartStore = useCartStore();
cartStore.addT(t);
const AddToCart = () => {
  // Logic to add the item to the cart
 cartStore.addOrUpdateItem(props.itemId);

  
};



</script>
<template>
    
   <Button @click="AddToCart" variant="default" class="flex-1"><ShoppingCart class="w-4 h-4 mr-2" />{{$t('Add to Cart')}}</Button>

</template>