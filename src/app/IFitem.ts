export interface Item {
  id: number;
  barcode: string;
  name: string;
  description?: string;
  type?: any;
  room?: any;
  status?: any;
  annotation?: any;
  image?: any;
  lend?: any;
  manufactor?: any;
  created_at: string;
  updated_at: string;
}
