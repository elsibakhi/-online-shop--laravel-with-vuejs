
import { useSidebarStore } from '@/Stores/Sidebar';






export  function useSetRouteAsActive (id:string){

    const sidebarStore = useSidebarStore();
    sidebarStore.setRouteAsActive(id)
};