"use client";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "@/icons";
import { useProductsStore } from "@/store/products";

const SearchInput = () => {
  const handleSearch = useProductsStore((state) => state.search);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const searchValue = e.currentTarget.value;
      const urlRegex = /(https?:\/\/[^\s]+)/;
      const extractedUrl = searchValue.match(urlRegex)?.[0]!;
      handleSearch(extractedUrl);
    }
  };

  return (
    <Input
      classNames={{
        base: "max-w-full h-10",
        mainWrapper: "h-full",
        input: "text-small",
        inputWrapper:
          "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
      }}
      placeholder="Paste a Shein URL to get product data"
      size="sm"
      endContent={<SearchIcon size={18} />}
      type="search"
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
