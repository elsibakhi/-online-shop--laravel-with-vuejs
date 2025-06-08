

export interface Route {
  title: string;
  url: string;
  id?: string;
  icon?: any;
  isActive?: boolean;
  items?: Route[]
   
  }