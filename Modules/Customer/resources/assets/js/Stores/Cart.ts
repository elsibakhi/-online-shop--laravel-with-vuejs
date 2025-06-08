import { addOrUpdate, empty, load, remove } from '@/actions/Modules/Customer/Http/Controllers/CartController';

import { router, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { defineStore } from 'pinia';
import { useToast } from '@/components/ui/toast/use-toast'
import { computed, ref, watch } from 'vue';
import ToastAction from '@/components/ui/toast/ToastAction.vue';
import { h } from 'vue';
import { ItemStatus } from '@vendor/js/types/item-status';
import { CheckoutItemsCartFormBalance } from '@/actions/Modules/Finance/Http/Controllers/OrderController';
import { useConfirmStore } from '@/Stores/confirm';
import { useForm } from 'laravel-precognition-vue-inertia';

const { toast } = useToast()


interface CartItem {
  id: number | string;
  title: string;
  price: number;
  discount: number;
  status: ItemStatus;
  quantity: number;
  remaining_quantity: number;
  image_path : string | undefined
  // Add other product properties as needed
}

interface CartState {
  items: CartItem[];
}

export const useCartStore = defineStore('cart', () => {
  const page =usePage();
  const userBalance = computed(() => page.props.auth.user.balance );
  
  const items = ref<CartItem[]>([]);
  const cartVisibility = ref<boolean>(false);
  const checkoutForm = useForm(
    CheckoutItemsCartFormBalance().method,
    CheckoutItemsCartFormBalance().url,
    {
    'items':  items.value 
  })

  watch(items, (newItems) => {
    checkoutForm.items = newItems.map(item => ({
      id: item.id,
      quantity: item.quantity,
     
    }));
  }, { immediate: true });

 
    let t:any = null;
  const totalItems = computed((): number => {
    return items.value.reduce((acc, item) => {
      if(item.status=="available"){

        return acc + item.quantity
      }
      return acc;
    }, 0);
  });

  const totalPrice = computed((): number => {
    return items.value.reduce((acc, item) =>
      {
        if(item.status=="available"){
  
          const itemPrice = item.price * item.quantity;
          const itemDiscount = itemPrice * item.discount;
          // Calculate the total price after discount
          return acc + itemPrice - itemDiscount;
         
        }
        return acc;
      }
     
    , 0);
  });

  const isCartItemsTotalPriceExceedUserBalance = computed(() =>userBalance.value<totalPrice.value );

  function toggleVisibility(){
    cartVisibility.value=!cartVisibility.value;
  }

  function openDrawer(){
    cartVisibility.value=true;
  }
  function closeDrawer(){
    cartVisibility.value=false;
  }
 async function addOrUpdateItem(itemId: number, quantity = 1) {

   const item = items.value.find(function (item) {
      return item.id === itemId;
    });
 
  const vaild = ref(true);
  const first_time = ref(false);

    if(item){

      if(quantity>0){
        if(item.remaining_quantity<(item.quantity+quantity)){
       
          vaild.value =false;
          toastByDate(t("The quantity you want to add to your cart is not available."))
   

        }
      }else{
        if(item.quantity < -quantity){
          
          vaild.value =false;
          toastByDate(t("You can't decrement item quantity more than you have in cart."))
   

        }
      }

      if(vaild.value){

        item.quantity += quantity;

      }
 

    }else{

      // the item is not in the cart
      first_time.value = true;

    }

   
      
    if(vaild.value){

   

      try {
        const response = (await axios.post(addOrUpdate().url, { item: itemId, quantity: quantity }));
            
        if(response.status==200 && first_time.value){
          toastByDate(t("Item added to cart successfully."))
   

          await loadCart();
        }
        if(response.status==200 && !first_time.value){
          toastByDate(t("Item quantity is " + (quantity > 0 ? "incremented" : "decremented") + " successfully."))
     


          await loadCart();
        }

        // for validation for checkout 
        checkoutForm.validate('items')
       
      } catch (error) {
     
        if (error.response) {
          toastByDate(error.response.data.message,)
      
    
        }
      }

    }
      
   
  }

  async function removeItem(itemId: number | string) {
    items.value = items.value.filter(item => item.id !== itemId);
     try {

 
      const response = (await axios.delete(remove(itemId).url));
          
      if(response.status==200){
        toastByDate(t("Item deleted from cart successfully."))
   


        await loadCart();
      }

     
    } catch (error) {
   
      if (error.response) {
        toastByDate(error.response.data.message)
 
  
      }
    }
  }



  async function clearCart() {
    items.value = [];
    try {

 
      const response = (await axios.delete(empty().url));
          
      if(response.status==200){
        toastByDate(t("The cart cleared successfully."))
   


        await loadCart();
      }

     
    } catch (error) {
   
      if (error.response) {
        toastByDate(error.response.data.message);
 
  
      }
    }
  }

  async function loadCart() {
    try {
      const response = await axios.get(load().url);
   
      items.value = response.data.data; // adjust this if needed
    } catch (error) {
      
      console.error(t("Failed to load cart items:"), error);
    }
  }

 
  async function checkoutFromBalance() {
   
 

    const confirmStore =useConfirmStore();
      closeDrawer()
    confirmStore.changeVisibility(true);

    const unsubscribe =confirmStore.$onAction(function({name,store,args,after}){
      if(name=="changeStatus"){
           
            after((res)=>{
              if(confirmStore.isConfirmed){
           
                checkoutForm.submit({

                  preserveScroll: true,
              
                  onSuccess: (res) => {
                   
                    checkoutForm.reset()

                  },
              
              });
              }else{
                  store.resetState()
                  unsubscribe()
              }
            });
      
      }

    })

      
   
    
  }
   function addT(trans:any) {
     t = trans;
  }

  function toastByDate(title:string):void{
    toast({
      title: title,
      description: new Date().toLocaleTimeString(),
      duration:1000
    });
  }

  
  return {
    items,
    cartVisibility,
    totalItems,
    totalPrice,
    checkoutForm,
    userBalance,
    isCartItemsTotalPriceExceedUserBalance,
    addOrUpdateItem,
    checkoutFromBalance,
    removeItem,
    toggleVisibility,
    openDrawer,
    closeDrawer,
    addT,
    clearCart,
    loadCart
  };
});

