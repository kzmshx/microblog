export type Product = {
  title: string;
  description: string;
  url: string;
  price: number;
  discountPrice?: number;
  discountEndDate?: Date;
  freeShipping: boolean;
  stockQuantity: number;
};
