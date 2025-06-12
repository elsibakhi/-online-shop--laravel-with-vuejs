<script setup>
import { ref, computed, watch, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import  RadioButton  from 'primevue/radiobutton'
import  InputNumber  from 'primevue/inputnumber'
import Button from 'primevue/button';
import { Card, CardContent,CardHeader } from '@/components/ui/card'
import ShadcnButton from '@/components/ui/button/Button.vue'
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { Link, useForm, usePage } from '@inertiajs/vue3';
import Panel from 'primevue/panel'
import { buyNowFormBalance, buyNowFromStripeCheckoutPage, buyNowFromStripeCheckoutSuccess } from '@/actions/Modules/Finance/Http/Controllers/OrderController';
import Divider from 'primevue/divider';
  import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'
import { Undo2 } from 'lucide-vue-next';
import { useConfirmStore } from '@/Stores/confirm';
import Confirm from '@/components/actions/Confirm.vue';


const { toast } = useToast()
const props = defineProps(['item','messages'])



const { t } = useI18n()
const page = usePage();



const availableMethods =  ['wallet', 'direct']
const selectedMethod = ref(availableMethods[0])
const directMethod = ref('paypal') // paypal, stripe, crypto


const unitPrice = props.item.data.price
const userBalance = page.props.auth.user?.balance_with_overhead
const form = useForm({
          item_id : props.item.data.id,
          quantity:1
        })

const totalPrice = computed(() => form.quantity * unitPrice)
const totalPriceAfterDiscount = computed(() => totalPrice.value - (totalPrice.value * props.item.data.discount))
const canBuyFromWallet = computed(() =>
 userBalance >= totalPriceAfterDiscount.value
)

const userBalanceNow = computed(()=> Number(userBalance - totalPriceAfterDiscount.value).toFixed(2) );

function submitPurchase() {
     
  if (selectedMethod.value === 'wallet') {
    const confirmStore =useConfirmStore();
    confirmStore.changeVisibility(true);

    const unsubscribe =confirmStore.$onAction(function({name,store,args,after}){
      if(name=="changeStatus"){
           
            after((res)=>{
              if(confirmStore.isConfirmed){
           
                form.submit(buyNowFormBalance())
              }else{
                  store.resetState()
                  unsubscribe()
              }
            });
      
      }

    })
    
   
    // alert(`${t('purchase.from_balance')}: $${totalPriceAfterDiscount.value}`)
  } else {
    alert(`${t('purchase.with')} ${directMethod.value.toUpperCase()}: $${totalPriceAfterDiscount.value}`)
  }
}




watchEffect(() => {
  const errors = page.props.errors;

  for (const key in errors) {
    if (errors[key]) {
      toast({
        title: errors[key],
      });
    }
  }
});

</script>

<template>
  <Card class="max-w-xl p-4 mx-auto mt-10 space-y-6">
    <CardHeader >
      <Link :href="route('dashboard')" class="w-20">
        <ShadcnButton  variant="outline" class="w-20 group">
                       
                       {{ t('purchase.cancel') }}
                       <Undo2 class="group-hover:translate-x-1"/>
                             </ShadcnButton>
      </Link>
     

     
    </CardHeader> 
    <CardContent>
      <div class="mt-6">
        <label class="block mb-1 font-medium">{{ t('purchase.quantity') }}:</label>
        <InputNumber v-model="form.quantity" :min="1" :max="item.data.quantity" showButtons buttonLayout="horizontal" class="w-full" />
      </div>

      <div class="mt-4 text-lg font-semibold">
        {{ t('purchase.total_price') }}: ${{ totalPriceAfterDiscount.toFixed(2) }}
      </div>
      
      <div class="card">
        <Tabs value="wallet">
            <TabList >
              <Tab  value="direct">direct</Tab>
              <Tab  value="wallet">wallet</Tab>
                
            </TabList>
            <TabPanels>
              <TabPanel value="direct">
                  <div  class="mt-4">

                <a target="_blank" :href="buyNowFromStripeCheckoutPage().url+`?item_id=${item.data.id}&quantity=${form.quantity}`">
                  <ShadcnButton  variant="outline" class="w-full">
                        <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.847-1.177-5.49-1.177-1.87 0-3.425.489-4.536 1.401-1.155.954-1.757 2.334-1.757 4 0 3.023 1.847 4.312 4.847 5.403 1.936.688 2.579 1.178 2.579 1.934 0 .732-.629 1.155-1.762 1.155-1.403 0-3.716-.689-5.231-1.578l-.674 4.157c1.304.732 3.705 1.488 6.197 1.488 1.976 0 3.624-.467 4.735-1.356 1.245-.977 1.89-2.422 1.89-4.289 0-3.091-1.889-4.38-4.935-5.468h.002z"/></svg>

                Buy By Stripe
              </ShadcnButton>

                </a>
                  
                    
    
        
      </div>
                </TabPanel>
                <TabPanel value="wallet">

                  <Panel :header="t('purchase.balance')" >

                    
<p class="m-0">
  {{t('purchase.your_balance_equal',{'balance':userBalance})}}
</p>

<Divider />
<p class="m-0">
  {{t('purchase.your_balance_now',{'balance':userBalanceNow})}}
</p>
                    </Panel>
  
             
      <Button
        class="w-full mt-6"
        :label=" t('purchase.buy_from_balance')"
        :disabled="selectedMethod === 'wallet' && !canBuyFromWallet"
        @click="submitPurchase"
      />
                </TabPanel>
  
               
            </TabPanels>
        </Tabs>
    </div>

      
     

 

  


     
    </CardContent>
  </Card>
  <Confirm />
  <Toaster />
</template>
