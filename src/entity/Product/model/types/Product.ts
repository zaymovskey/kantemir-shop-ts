export interface IProduct {
  name: string;
  price: number;
  main_image: string;
  description: string;
  category: IProductCategory;
  slug: string;
  images: IProductImage[];
  sizes: IProductSize;
}

export interface IProductCategory {
  id: number;
  name: string;
}

export interface IProductImage {
  id: number;
  image: string;
  product: number;
}

export interface IProductSize {
  id: number;
  name: string;
  products: number[];
}
