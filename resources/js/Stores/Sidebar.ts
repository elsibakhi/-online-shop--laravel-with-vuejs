

  import { Route } from "@/types/route"
import { usePage } from "@inertiajs/vue3"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useSidebarStore = defineStore('sidebar', () => {
  
    const page = usePage();
  
    
    const routes = ref(page.props.sidebar)

    function setRouteAsActive (id:string){

        routes.value.forEach(element => {
       return element.isActive=false;
      });

      const index = routes.value.findIndex((value)=>{
               return id==value.id
       });

   
       if(index > -1){
           routes.value[index].isActive=true;
       }
   }
   
  
    return {routes,setRouteAsActive }
  })