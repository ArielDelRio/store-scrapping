import { Root as SheinProductDetail } from "./types/sheinProductDetailTypes";
declare const findProductByLink: (link: string) => Promise<SheinProductDetail | undefined>;
export { findProductByLink };
