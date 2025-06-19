

export interface PurchaseTransaction {
    id: number;
    items: any[];
    amount: number;
    currency: string;
    description: string;
    status: 'pending'| 'completed'| 'refunded';
    date: string;
   
   
  }