"use client";
import Carousel from "../Carousel/Carousel";
import "./CardProduct.css";
import { useEffect, useState } from "react";

const CardProduct = ({ product }: any) => {
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

      sizes: product.info.multiLevelSaleAttribute.sku_list,
      measurements:
        product.info.multiLevelSaleAttribute.skc_sale_attr[0] &&
        product.info.multiLevelSaleAttribute.skc_sale_attr[0].attr_value_list[0]
          .attrDescPopUp
          ? product.info.multiLevelSaleAttribute.skc_sale_attr[0]
              .attr_value_list[0].attrDescPopUp[0].bindAttrData
          : null,
      color: product.info.productDetails[0].attr_value,
      allColors: product.info.mainSaleAttribute.info,
      productDetails: product.info.productDetails,
    });

    useEffect(() => {
      setData({
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

        sizes: product.info.multiLevelSaleAttribute.sku_list,
        measurements:
          product.info.multiLevelSaleAttribute.skc_sale_attr[0] &&
          product.info.multiLevelSaleAttribute.skc_sale_attr[0]
            .attr_value_list[0].attrDescPopUp
            ? product.info.multiLevelSaleAttribute.skc_sale_attr[0]
                .attr_value_list[0].attrDescPopUp[0].bindAttrData
            : null,
        color: product.info.productDetails[0].attr_value,
        allColors: product.info.mainSaleAttribute.info,
        productDetails: product.info.productDetails,
      });
    }, ["", product]);

    return (
      <div className="container mx-auto card gap-4 columns-2 p-2 ">
        <div className="content-img p-2 bg-zinc-700 rounded ">
          <Carousel>
            {data.images.map((image: any) => (
              <img
                className="cover-img h-full rounded "
                src={image.origin_image}
              />
            ))}
          </Carousel>
          <div className="my-6">
            <span className=" p-2 bg-zinc-700 rounded text-4xl">
              {data.retailPriceWithSymbol}
            </span>
          </div>
        </div>
        <div>
          <div className="mb-2">
            <span
              className="p-2 bg-zinc-700 rounded overflow-hidden inline-block"
              style={{ whiteSpace: "normal" }}
            >
              {data.name}
            </span>
          </div>
          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded">
              Category: {data.category}
            </span>
          </div>

          <div className="mb-2">
            {data.measurements && (
              <span
                className="p-2 bg-zinc-700 rounded overflow-hidden inline-block"
                style={{ whiteSpace: "normal" }}
              >
                {data.measurements.map((means: any) => (
                  <span className=" p-2 bg-zinc-700 ">
                    {means.attrNameKey}: {means.attrNameValue}
                  </span>
                ))}
              </span>
            )}
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
              Others Colors:{" "}
              {data.allColors.map(
                (color: any) =>
                  color.atattr_value != data.color && (
                    <span
                      style={{ backgroundColor: color.attr_value }}
                      className="color-box py-1 px-3.5 ml-2 rounded-full"
                    ></span>
                  )
              )}
              {data.allColors.length === 0 && <span>None</span>}
            </span>
          </div>
          {data.productDetails.map(
            (prod: any) =>
              prod.attr_name != "Color" && (
                <div className="mb-5">
                  <span className=" p-2 bg-zinc-700 rounded">
                    {prod.attr_name}: {prod.attr_value}
                  </span>
                </div>
              )
          )}

          <div className="mb-5">
            <span className=" p-2 bg-zinc-700 rounded  mr-4">
              Sizes:{" "}
              {data.sizes[0].sku_sale_attr[0] ? (
                <select className="text-black">
                  {data.sizes.map(
                    (size: any) =>
                      size.sku_sale_attr[0].attr_value_name && (
                        <option className="text-black">
                          {size.sku_sale_attr[0].attr_value_name}
                        </option>
                      )
                  )}
                </select>
              ) : (
                <span className=" p-2 bg-zinc-700 rounded">One Size</span>
              )}
            </span>
            <span className=" p-2 bg-zinc-700 rounded">
              Quantity to buy:{" "}
              <input
                type="number"
                defaultValue={1}
                className="rounded p-1 w-10 text-black"
              />
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
