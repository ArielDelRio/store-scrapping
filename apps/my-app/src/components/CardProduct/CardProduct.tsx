"use client";
import "./CardProduct.css";
import { useState } from "react";

interface CardProduct {
  product: any;
  loading: boolean;
}

const CardProduct = ({ product, loading }: CardProduct) => {
  if (product && product.info) {
    const [data, setData] = useState({
      id: product.info.goods_id,
      name: product.info.goods_name,
      retailPriceWithSymbol:
        product.info.mallInfoList[0].retailPrice.amountWithSymbol,
      retailPrice: product.info.mallInfoList[0].retailPrice.amount,
      salePriceWithSymbol:
        product.info.mallInfoList[0].salePrice.amountWithSymbol,
      salePrice: product.info.mallInfoList[0].salePrice.amount,
      images: product.info.nowater_gallery.detail_image,
      category: product.info.cate_name,
      size: product.info.multiLevelSaleAttribute.skc_sale_attr[0]
        .attr_value_list[0].attr_value_name,
      height:
        product.info.multiLevelSaleAttribute.skc_sale_attr[0].attr_value_list[0]
          .attrDescPopUp[0].bindAttrData[0].attrNameValue,
      width:
        product.info.multiLevelSaleAttribute.skc_sale_attr[0].attr_value_list[0]
          .attrDescPopUp[0].bindAttrData[1].attrNameValue,
      length:
        product.info.multiLevelSaleAttribute.skc_sale_attr[0].attr_value_list[0]
          .attrDescPopUp[0].bindAttrData[2].attrNameValue,
      color: product.info.productDetails[0].attr_value,
      allColors: product.info.mainSaleAttribute.info,
      type: product.info.productDetails[1].attr_value,
      composition: product.info.productDetails[2].attr_value,
      material: product.info.productDetails[3].attr_value,
    });
    return (
      <div className="container mx-auto card gap-4 columns-2 p-2">
        <div className="content-img p-2 bg-zinc-700 rounded ">
          <img
            className="cover-img h-full rounded"
            src={data.images[0].origin_image}
          />
        </div>
        <div>
          <div className="my-6">
            <span className=" p-2 bg-zinc-700 rounded text-4xl">
              {data.retailPriceWithSymbol}
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">{data.name}</span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              Category: {data.category}
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">Size: {data.size}</span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              Height: {data.height} - Width: {data.width} - Length:{" "}
              {data.length}
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              Color: {data.color}
              <span
                style={{ backgroundColor: data.color }}
                className="color-box py-1 px-3.5 ml-2 rounded-full"
              ></span>
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              All Colors:{" "}
              {data.allColors.map((color: any) => (
                <span
                  style={{ backgroundColor: color.attr_value }}
                  className="color-box py-1 px-3.5 ml-2 rounded-full"
                ></span>
              ))}
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">Type: {data.type}</span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              Composition: {data.composition}
            </span>
          </div>
          <div className="mb-20">
            <span className=" p-2 bg-zinc-700 rounded">
              Material: {data.material}
            </span>
          </div>
          <div>
            <button className=" p-2 bg-emerald-800 hover:bg-green-400 transition duration-300 rounded">
              + Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CardProduct;
