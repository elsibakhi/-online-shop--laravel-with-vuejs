export interface Post {
    id:number;
    content:string;
    likes:Array<any>;
    likes_count:number;
    updated_at:string;
    user:{
        id:number;
        name:string;
        username:string;
        avatar?:string
    };
    comments_count:number;
    comments?:Post[];
    commentIntent?:boolean;
    mention?:string;
}