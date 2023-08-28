"use client";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import "./CardProduct.css";
import { useMemo } from "react";
import { Product } from "store-api-controller/src/types";
import { mapProductByStore } from "@/utils/mapProductByStore";
import { useCart } from "react-use-cart";

type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const { addItem } = useCart();
  const mappedProduct = useMemo(() => mapProductByStore(product), [product]);

  if (!mappedProduct) return null;

  return (
    <div className="flex mx-auto gap-4">
      <div className="flex flex-col content-img p-2 bg-zinc-700 rounded">
        <Carousel>
          {mappedProduct.images.map((image: any) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.origin_image}
              className="cover-img h-full rounded "
              src={image.origin_image}
              // width={100}
              // height={100}
              alt={image.alt}
            />
          ))}
        </Carousel>
        <div className="my-6">
          <span className=" p-2 bg-zinc-700 rounded text-4xl">
            {mappedProduct.retailPriceWithSymbol}
          </span>
        </div>
        <button
          onClick={() =>
            addItem({ price: +mappedProduct.salePrice, ...mappedProduct }, 1)
          }
          className=" p-2 bg-emerald-800 hover:bg-green-400 transition duration-300 rounded"
        >
          + Add to cart
        </button>
      </div>
      <div>
        <div className="mb-2">
          <span className="p-2 bg-zinc-700 rounded overflow-hidden inline-block">
            {mappedProduct.name}
          </span>
        </div>
        <div className="mb-5">
          <span className=" p-2 bg-zinc-700 rounded">
            Category: {mappedProduct.category}
          </span>
        </div>

        <div className="mb-2">
          {mappedProduct.measurements && (
            <span className="p-2 bg-zinc-700 rounded overflow-hidden inline-block">
              {mappedProduct.measurements.map((means: any) => (
                <span key={means.attrNameKey} className=" p-2 bg-zinc-700 ">
                  {means.attrNameKey}: {means.attrNameValue}
                </span>
              ))}
            </span>
          )}
        </div>
        <div className="mb-5">
          <span className=" p-2 bg-zinc-700 rounded">
            Color: {mappedProduct.color}
            <span
              style={{ backgroundColor: mappedProduct.color }}
              className="color-box py-1 px-3.5 ml-2 rounded-full"
            ></span>
          </span>
        </div>
        {/* <div className="mb-5">
          <span className=" p-2 bg-zinc-700 rounded">
            Others Colors:
            {mappedProduct.allColors.map(
              (color: any) =>
                color.attr_value != mappedProduct.color && (
                  <span
                    key={color.attr_value}
                    style={{ backgroundColor: color.attr_value }}
                    className="color-box py-1 px-3.5 ml-2 rounded-full"
                  ></span>
                )
            )}
            {mappedProduct.allColors.length === 0 && <span>None</span>}
          </span>
        </div> */}
        {mappedProduct.productDetails.map(
          (prod: any) =>
            prod.attr_name != "Color" && (
              <div key={prod.attr_name} className="mb-5">
                <span className=" p-2 bg-zinc-700 rounded">
                  {prod.attr_name}: {prod.attr_value}
                </span>
              </div>
            )
        )}

        <div className="mb-5">
          <span className=" p-2 bg-zinc-700 rounded  mr-4">
            Sizes:{" "}
            {mappedProduct.sizes[0].sku_sale_attr[0] ? (
              <select className="text-black" title="sizes">
                {mappedProduct.sizes.map(
                  (size: any) =>
                    size.sku_sale_attr[0].attr_value_name && (
                      <option
                        key={size.sku_sale_attr[0].attr_value_name}
                        className="text-black"
                      >
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
              placeholder="1"
              type="number"
              defaultValue={1}
              className="rounded p-1 w-10 text-black"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
