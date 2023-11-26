"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import { useProductsStore } from "@/store/products";
import { Spinner } from "@nextui-org/react";

const ProductPage = () => {
  const { product, fetching } = useProductsStore((state) => ({
    product: state.product,
    fetching: state.fetching,
  }));

  return (
    <main className="mx-auto max-w-screen-2xl p-4">
      {fetching ? (
        <div className="flex flex-col">
          <Spinner size="lg" className="translate-y-[30vh]" />
        </div>
      ) : (
        <CardProduct product={product} />
      )}
    </main>
  );
};

export default ProductPage;
