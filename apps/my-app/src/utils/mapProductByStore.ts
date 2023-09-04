import { ClientProduct } from "@/types/ClientProduct";
import { Product } from "store-api-controller/dist/types";

export const mapProductByStore = (
  product: Product
): ClientProduct | undefined => {
  if (product) {
    if (product.store === "shein") {
      return {
        id: product.goods_id,
        name: product.goods_name,
        retailPriceWithSymbol:
          product.mallInfoList[0].retailPrice.amountWithSymbol,
        retailPrice: product.mallInfoList[0].retailPrice.amount,
        salePriceWithSymbol: product.mallInfoList[0].salePrice.amountWithSymbol,
        salePrice: product.mallInfoList[0].salePrice.amount,
        images: product.nowater_gallery.detail_image,
        category: product.cate_name,
        sizes: product.multiLevelSaleAttribute.sku_list,
        measurements:
          product.multiLevelSaleAttribute.skc_sale_attr[0]?.attr_value_list,
        color: product.productDetails[0].attr_value,
        allColors: product.mainSaleAttribute.info,
        productDetails: product.productDetails,
      };
    }
  }
};
