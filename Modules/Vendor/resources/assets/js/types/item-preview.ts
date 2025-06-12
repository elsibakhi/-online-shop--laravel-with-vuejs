export interface Item {
    id: number;
    title: string;
    description: string;
    user_id: number;
    code:string;
    priceable_type: 'normal' | 'auction';
    priceable: {
      price?: number;
      discount?: number;
      initial_price?: number;
     
      user_start?: string;
      user_end?: string;
      status?: "pending"|"started"|"done"|"fails"|"postponed";
      isBlackFridaySupported?: boolean;
    };
    extensions: { id: number; path: string }[];
    tags: { tag: string }[];
    specifications: {
      name: string;
      subs: { key: string; value: string }[];
    }[];
    sub_category: {
      name: string;
      category: { name: string };
    };
    quantity: number;
    remaining_quantity: number;
  }
  