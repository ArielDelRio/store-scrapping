"use client";
import SearchInput from "@/components/SearchInput/SearchInput";
import InfoContainer from "@/components/InfoContainer/InfoContainer";
import axios from "axios";
import { useState } from "react";
import CardProduct from "@/components/CardProduct/CardProduct";
import { Product } from "store-api-controller/dist/types";

export default function Home() {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);

  const handleSearch = async (search: string | undefined) => {
    if (!search) return;

    const urlRegex = /(https?:\/\/[^\s]+)/;
    const extractedUrl = search.match(urlRegex)?.[0];

    setLoading(true);
    const { data: product } = await axios.get<Product>("/api/store", {
      params: { link: extractedUrl },
    });
    setLoading(false);
    setProduct(product);
  };

  return (
    <main className="min-h-screen px-4 flex flex-col items-center gap-1">
      {/* <SearchInput onSearch={handleSearch} /> */}
      <CardProduct product={product} />
    </main>
  );
}
