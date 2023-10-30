"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { useCartPanel } from "@/store/cartPanel";
import { XMark } from "@/icons";

export default function CartPanel() {
  const { isOpen, onClose } = useCartPanel();

  return (
    <div
      id="cart-panel"
      className={`z-40 fixed top-0 right-0 bottom-0 h-full w-96 border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>Cart Panel</div>
        <Button
          isIconOnly
          onClick={onClose}
          variant="ghost"
          className="text-white hover:text-neutral-700"
        >
          <XMark />
        </Button>
      </div>
    </div>
  );
}
