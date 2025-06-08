import { toast } from '@/components/ui/toast';
import { router } from '@inertiajs/vue3';
import { inject } from 'vue';
import { useConfirmStore } from '@/Stores/confirm'

// by convention, composable function names start with "use"
export function useDelete(url:string,id:number,t:Function,partialReloadData?:string[],success_callback?:Function):void {
  const confirmStore =useConfirmStore();

      const only_data: Array<string>=["message"];
      if(partialReloadData){
        only_data.push(...partialReloadData);
      }
    
      
      confirmStore.changeVisibility(true);

    const unsubscribe =confirmStore.$onAction(function({name,store,args,after}){
      if(name=="changeStatus"){
           
            after((res)=>{
              if(confirmStore.isConfirmed){
           
                router
                .delete(route(url,id),{
                  onSuccess : () => {
                    if(success_callback){
                      success_callback()
                    }
                  },
                 onError: function(message) { 
                    toast({title:t('An Error While Deleting This Element')})
                  },
                  only:only_data,
                  preserveScroll: true,
                  preserveState: true,
                }
                )
              }else{
                  store.resetState()
                  unsubscribe()
              }
            });
      
      }

    })

    

}