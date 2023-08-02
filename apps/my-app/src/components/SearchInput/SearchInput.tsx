"use client";
import { useRef } from "react";
import "./SearchInput.css";

interface SearchInputProps {
  onSearch: (toSearch: string | undefined) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        ref={inputRef}
        className="search-input"
        type={"text"}
        placeholder="Paste a URL or Search a Product"
      />
      <button
        className="search-button"
        onClick={() => onSearch(inputRef.current?.value)}
      >
        Search
      </button>
    </>
  );
};

export default SearchInput;
