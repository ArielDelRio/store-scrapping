"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import { useProductsStore } from "@/store/products";
import { Spinner } from "@nextui-org/react";

const HomePage = () => {
  const { product, fetching } = useProductsStore((state) => ({
    product: state.product,
    fetching: state.fetching,
  }));

  return (
    <main className="min-h-screen px-4 flex flex-col items-center gap-1">
      {fetching && <Spinner size="lg" className="translate-y-[30vh]" />}
      <CardProduct product={product} />
    </main>
  );
};
export default HomePage;
