import { SheinProductDetails } from "./sheinProductDetailTypes";
export type Store = "shein" | "amazon";
export type Params = {
    product_id: string;
};
export type Domains = "api-shein.shein.com" | "us.shein.com" | "amazon.com";
export type Product = SheinProductDetails | undefined;
