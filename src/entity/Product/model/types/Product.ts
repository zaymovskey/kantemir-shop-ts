export interface IProduct {
  id: number;
  name: string;
  slug: string;
  price: number;
  main_image: string;
  description: string;
  productImages: IProductImage[];
  category: IProductCategory;
  sizes: IProductSize[];
}

export interface IProductCategory {
  id: number;
  name: string;
}

export interface IProductImage {
  id: number;
  image: string;
}

export interface IProductSize {
  id: number;
  name: string;
}
