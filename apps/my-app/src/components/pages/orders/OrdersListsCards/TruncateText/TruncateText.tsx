"use client";
import React, { useState } from "react";

interface TruncateTextProps {
  text: string;
  maxLength?: number;
}

const TruncateText = ({ text, maxLength = 100 }: TruncateTextProps) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="flex gap-1 items-baseline">
      <p className="text-sm">{displayText}</p>
      <button
        type="button"
        onClick={toggleTruncated}
        className="text-sm text-blue-500 hover:text-blue-800"
      >
        {isTruncated ? "More Info" : "Less"}
      </button>
    </div>
  );
};

export default TruncateText;
