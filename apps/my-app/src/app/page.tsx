"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import { useProductsStore } from "@/store/products";
import { Spinner } from "@nextui-org/react";

export default function Home() {
  const { product, fetching } = useProductsStore((state) => ({
    product: state.product,
    fetching: state.fetching,
  }));

  return (
    <main className="min-h-screen px-4 flex flex-col items-center gap-1">
      <section>
        {fetching ? (
          <Spinner size="lg" className="translate-y-[30vh]" />
        ) : (
          <CardProduct product={product} />
        )}
      </section>
    </main>
  );
}
