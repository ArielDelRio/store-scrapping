"use client";
import { useRef } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  onSearch: (toSearch: string | undefined) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="lg:w-6/12 md:w-10/12 min-h-20 flex">
      <input
        ref={inputRef}
        className="search-input w-full"
        type={"text"}
        placeholder="Paste a Shein URL to get product data"
      />
      <button
        className="search-button"
        onClick={() => onSearch(inputRef.current?.value)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInput;
