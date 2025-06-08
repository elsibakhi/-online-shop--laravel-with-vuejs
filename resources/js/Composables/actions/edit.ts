import { toast } from '@/components/ui/toast';
import { router } from '@inertiajs/vue3';
import { inject } from 'vue';




// by convention, composable function names start with "use"
export async function useEdit (editHref:string,updateHref:string,form:any){

  try {
    const response = await fetch(editHref, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      // Handle the data here, assuming the data includes necessary props for Inertia
       form.href = updateHref;
       form.method = 'put';
       form.data = data;
       form.open = true;
     
      // You can process this data and update your state accordingly
    } else {
      console.error('Failed to load data:', response.statusText);
    }
  } catch (error) {
    console.error('Error during fetch:', error);
  }
};