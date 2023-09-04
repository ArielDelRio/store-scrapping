"use client";
import { Button, Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons";
import { useProductsStore } from "@/store/products";
import { useRef } from "react";

const SearchInput = () => {
  const handleSearch = useProductsStore((state) => state.search);
  const ref = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchValue = ref.current?.value!;
      if (!searchValue) return;
      const urlRegex = /(https?:\/\/[^\s]+)/;
      const extractedUrl = searchValue.match(urlRegex)?.[0]!;
      handleSearch(extractedUrl);
    }
  };

  const handleClick = () => {
    const searchValue = ref.current?.value!;
    if (!searchValue) return;
    const urlRegex = /(https?:\/\/[^\s]+)/;
    const extractedUrl = searchValue.match(urlRegex)?.[0]!;
    handleSearch(extractedUrl);
  };

  return (
    <Input
      ref={ref}
      classNames={{
        base: "max-w-full h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Paste a Shein URL to get product data"
      size="sm"
      endContent={
        <Button
          isIconOnly
          className="bg-transparent text-default-500"
          onClick={handleClick}
        >
          <SearchIcon size={18} />
        </Button>
      }
      type="search"
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
