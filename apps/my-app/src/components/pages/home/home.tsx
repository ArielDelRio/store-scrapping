"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import Message from "@/components/Message/Message";
import { useProductsStore } from "@/store/products";
import { Spinner } from "@nextui-org/react";

const HomePage = () => {
  const { product, fetching } = useProductsStore((state) => ({
    product: state.product,
    fetching: state.fetching,
  }));

  if (!fetching && !product)
    return (
      <main className="mx-auto max-w-screen-2xl p-4">
        <Message />
      </main>
    );

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
export default HomePage;
