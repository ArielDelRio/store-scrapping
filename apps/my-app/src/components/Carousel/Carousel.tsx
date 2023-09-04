"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

const Carousel = ({ images }: any) => {
  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <>
      <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
        <img
          key={images?.[selectedImage]?.origin_image}
          className="h-full w-full object-contain"
          src={images?.[selectedImage]?.origin_image}
          alt={images?.[selectedImage]?.alt}
        />
        <div className="absolute bottom-[5%] flex w-full justify-center">
          <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
            <button
              onClick={() =>
                setSelectedImage(
                  (selectedImage - 1 + images?.length) % images?.length
                )
              }
              aria-label="Previous product image"
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
            >
              <p className="text-2xl">{"<"}-</p>
            </button>
            <div className="mx-1 h-6 w-px bg-neutral-500"></div>
            <button
              onClick={() =>
                setSelectedImage((selectedImage + 1) % images?.length)
              }
              aria-label="Next product image"
              className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
            >
              <p className="text-2xl">-{">"}</p>
            </button>
          </div>
        </div>
      </div>
      <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
        {images?.map((image: any, index: number) => (
          <li
            className="h-20 w-20 cursor-pointer"
            key={image.origin_image}
            onClick={() => setSelectedImage(index)}
          >
            <div className="h-full w-full">
              <div
                className={`group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white hover:border-blue-600 dark:bg-black border-2 ${
                  index === selectedImage ? "border-blue-600" : "border-white"
                }`}
              >
                <Image
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  src={image.origin_image}
                  width={100}
                  height={100}
                  alt={"image"}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Carousel;
