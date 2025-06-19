export interface Rating {
    id:number;
    rating:1|2|3|4|5;
    note:string;
    user:{
        name:string
    };
    
  
}