"use client";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import "./CardProduct.css";
import { useMemo, useState } from "react";
import { Product } from "store-api-controller/src/types";
import { mapProductByStore } from "@/utils/mapProductByStore";
import { useCart } from "react-use-cart";
import { ClientProduct } from "@/types/ClientProduct";

type CardProductProps = {
  product: Product;
};

const CardProduct = ({ product }: CardProductProps) => {
  const { addItem } = useCart();
  const mappedProduct = useMemo(() => mapProductByStore(product), [product]);

  const [selectedSize, setSelectedSize] = useState(0);

  const handleAddProduct = (mappedProductToAdd: ClientProduct) => {
    const productToAdd = {
      id: mappedProductToAdd.id,
      name: mappedProductToAdd.name,
      color: mappedProductToAdd.color,
      size: mappedProductToAdd.sizes[selectedSize].sku_sale_attr[0]
        .attr_value_name,
      price: +mappedProductToAdd.salePrice,
      image: mappedProductToAdd.images[0].origin_image,
    };
    addItem(productToAdd);
  };

  if (!mappedProduct) return null;

  return (
    <>
      <article className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
        {/* Carousel */}
        <div className="h-full w-full basis-full lg:basis-4/6">
          <Carousel images={mappedProduct?.images} />
        </div>
        {/* Product Info */}
        <div className="basis-full lg:basis-2/6">
          {/* Product Name and Price */}
          <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
            <h1 className="mb-2 text-lg font-medium">{mappedProduct.name}</h1>
            <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
              <p>
                {mappedProduct.retailPriceWithSymbol}
                <span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>

          {/* Category Product */}
          <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
            <p className="mb-4 text-sm uppercase tracking-wide font-bold">
              Category
            </p>
            <span className="leading-7 dark:text-gray-300 text-sm">
              {mappedProduct.category}
            </span>
          </div>

          {/* Product sizes */}
          <dl className="mb-6">
            <dt className="mb-4 text-sm uppercase tracking-wide font-bold">
              Size
            </dt>
            <dd className="flex flex-wrap gap-3">
              {mappedProduct.sizes.map((size: any, index) => (
                <button
                  key={size.sku_sale_attr[0].attr_value_name}
                  onClick={() => setSelectedSize(index)}
                  className={`border   rounded-full px-3 py-1 text-sm
                  ${
                    index === selectedSize
                      ? "border-blue-600"
                      : "dark:border-neutral-700"
                  }
                  `}
                >
                  {size.sku_sale_attr[0].attr_value_name}
                </button>
              ))}
            </dd>
          </dl>

          <div className="mb-6 border-b pb-6 dark:border-neutral-700">
            {mappedProduct.measurements && (
              <span className="flex gap-5 justify-items-start">
                {mappedProduct.measurements?.[
                  selectedSize
                ]?.attrDescPopUp?.[0]?.bindAttrData?.map((means: any) => (
                  <span key={means.attrNameKey} className="">
                    <p className="mb-1 text-sm uppercase tracking-wide font-bold">
                      {means.attrNameKey}
                    </p>
                    <span className="leading-7 dark:text-gray-300 text-sm">
                      {means.attrNameValue}
                    </span>
                  </span>
                ))}
              </span>
            )}
          </div>

          {/* Product colors */}
          <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
            <p className="mb-4 text-sm uppercase tracking-wide font-bold">
              Color
            </p>
            <span className="leading-7 dark:text-gray-300 text-sm">
              {mappedProduct.color}
            </span>
          </div>

          <button
            aria-label="Add item to cart"
            className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
            onClick={() => handleAddProduct(mappedProduct)}
          >
            <span>+ Add to Cart</span>
          </button>
        </div>
      </article>
    </>
  );
};

export default CardProduct;
