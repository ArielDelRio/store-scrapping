import {
  DetailImage,
  MainSaleAttribute,
  ProductDetail,
  SkuList,
} from "store-api-controller/dist/types/sheinProductDetailTypes";

export type ClientProduct = {
  id: string;
  name: string;
  retailPriceWithSymbol: string;
  retailPrice: string;
  salePriceWithSymbol: string;
  salePrice: string;
  images: DetailImage[];
  category: string;
  sizes: SkuList[];
  measurements: any;
  color: string;
  allColors: any[];
  productDetails: ProductDetail[];
};

export type CartProduct = {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
};
