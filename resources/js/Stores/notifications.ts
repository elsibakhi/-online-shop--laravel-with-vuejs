

  import { Route } from "@/types/route"
import { usePage } from "@inertiajs/vue3"
import { defineStore } from "pinia"
import { computed, reactive, ref } from "vue"
import moment from "moment";
import axios from "axios";
import { get } from "@/actions/App/Http/Controllers/NotificationController";
import { show } from "@/actions/Modules/Customer/Http/Controllers/PostController";

type FormattedNotification = {
  isRead: boolean,
  message: string,
  route: string,
  time: string
}


export const useNotificationsStore = defineStore('notifications', () => {
  
  
    const next_page_url = ref(get().url+`?page=1`);
    const locked = ref(false);
   
    const notifications = ref<any[]>([])
    const unreadNotificationsCount = ref<number>(0)
     const formattedNotifications = computed(()=>notifications.value.map((notification)=>getFormattedNotification(notification)))


    function refreshNotifications (){

        axios.get(get().url+`?page=1`).then(function(response){
        

              notifications.value =response.data.notifications.data
              unreadNotificationsCount.value= response.data.unread_notifications_count 
              next_page_url.value =response.data.notifications.next_page_url;
        })
     
   }

      function prependNotification (newNotification :any){
     
        
        notifications.value.unshift(newNotification);
        unreadNotificationsCount.value++;
      }


      
   
      async function fetchNotifications(){
   
      
       // if i switch from posts to timeline and  verca vice
       if (!locked.value) {
   
           locked.value = true;
   
        
       
             //load posts as pages in case of index page 
       
             if(next_page_url.value){
             await  axios.get(next_page_url.value).then((response) => {

              notifications.value.push(...response.data.notifications.data) 
              unreadNotificationsCount.value= response.data.unread_notifications_count 
              next_page_url.value =response.data.notifications.next_page_url;
                  
               
          
                })
             }
       
   
   
           locked.value = false;
         
           
       }
   
   
   
       
   
       }
   

   function getNotifications(){
            return notifications.value;
   }
   function getUnreadNotificationsCount(){
            return unreadNotificationsCount.value;
   }
   
function getFormattedNotification(notification: any,broadcasted?:boolean): FormattedNotification {

 const  formattedNotification = reactive({
   isRead:false,
   message : '',
   route : '',
   time :moment(notification.created_at).fromNow()
 })

 let data = notification.data;
 if(broadcasted){
    data = notification;
 }


  switch (notification.type) {

    case 'Modules\\Customer\\Notifications\\UserCommentOnPost':

    formattedNotification.message = `${data.replier.name} replied on your ${data.post.type == 'post' ? 'post' : 'comment'} ${data.post.content.slice(0, 50)}`
    formattedNotification.route = show(data.post.id).url+`?notification=${notification.id}`;



      break;
    case 'Modules\\Customer\\Notifications\\UserLikePost':

    formattedNotification.message = `${data.user.name} liked your ${data.post.type == 'post' ? 'post' : 'comment'} ${data.post.content.slice(0, 50)}`
    formattedNotification.route = show(data.post.id).url+`?notification=${notification.id}`;

      break;

    case 'Modules\\Customer\\Notifications\\UserMentionUser':

    formattedNotification.message = `${data.user.name} mention you in a ${data.post.type == 'post' ? 'post' : 'comment'} ${data.post.content.slice(0, 50)}`
    formattedNotification.route = show(data.post.id).url+`?notification=${notification.id}`;
    
    break;
    
    

    
  }
  
  
  formattedNotification.isRead = notification.read_at? true:false ;
 

  return formattedNotification
}

function getFormattedNotifications(customNotifications:any[]){

 
 return customNotifications.map((unFormattedNotification)=>getFormattedNotification(unFormattedNotification))
}

fetchNotifications();
  
    return {notifications,
      formattedNotifications,
      prependNotification,
      fetchNotifications,
      getNotifications,
      getUnreadNotificationsCount,
      refreshNotifications,
      getFormattedNotification,
      getFormattedNotifications }
  })