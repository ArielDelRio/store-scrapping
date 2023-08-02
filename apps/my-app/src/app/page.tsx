"use client";
import SearchInput from "@/components/SearchInput/SearchInput";
import InfoContainer from "@/components/InfoContainer/InfoContainer";
import { findProductByLink } from "store-api-controller";
import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState<unknown>(null);

  const handleSearch = async (search: string | undefined) => {
    if (!search) return;

    const { data } = await axios.get("/api/store", {
      params: { link: search },
    });

    setProduct(data);
  };

  return (
    <main className="min-h-screen p-24">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <SearchInput onSearch={handleSearch} />
        <InfoContainer product={product} />
      </div>
    </main>
  );
}
