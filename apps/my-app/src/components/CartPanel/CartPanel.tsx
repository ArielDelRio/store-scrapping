"use client";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { useCartPanel } from "@/store/cartPanel";
import { Minus, Plus, XMark } from "@/icons";
import { useCart } from "react-use-cart";
import { ShoppingCartIcon } from "@/icons";
import Image from "next/image";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/database.types";

export default function CartPanel({ user }: { user: User | null }) {
  const { isOpen, onClose } = useCartPanel();

  const [creatingOrder, setCreatingOrder] = useState(false);

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();
  const supabase = createClientComponentClient<Database>();

  const handleCreateOrder = async () => {
    setCreatingOrder(true);
    const { data, error: insertOrderError } = await supabase
      .from("orders")
      .insert([
        {
          user_id: user?.id,
          items: items,
          total: cartTotal,
        },
      ]);

    if (insertOrderError) {
      console.log(insertOrderError);
      return;
    }
    setCreatingOrder(false);
    emptyCart();
    onClose();
  };
  return (
    <div
      suppressHydrationWarning
      id="cart-panel"
      className={`z-40 fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-black/80 dark:text-white md:w-[390px] transition-transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">My Cart</div>
        <Button
          isIconOnly
          onClick={onClose}
          variant="ghost"
          className="text-white hover:text-neutral-700"
        >
          <XMark />
        </Button>
      </div>
      {isEmpty ? (
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="h1">
            <ShoppingCartIcon className="h-16" />
          </div>
          <p className="mt-6 text-center text-2xl font-bold">
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <ul className="flex-grow overflow-auto py-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
              >
                <div className="relative flex w-full flex-row justify-between px-1 py-4">
                  <div
                    id={`cart-panel-remove-item-btn-${item.id}`}
                    className="absolute z-40 -mt-2 ml-[55px]"
                  >
                    <button
                      title="Remove item"
                      className="ease flex h-[17px] w-[17px] items-center justify-center rounded-full bg-neutral-500 transition-all duration-200 text-black"
                      onClick={() => removeItem(item.id)}
                    >
                      <XMark />
                    </button>
                  </div>
                  <div
                    id={`cart-panel-preview-item-${item.id}`}
                    className="z-30 flex flex-row space-x-4"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-md border border-neutral-300 bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                      <Image
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex flex-1 flex-col text-base">
                      <span className="leading-tight w-32 truncate">
                        {item.name}
                      </span>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {item.color} / {item.size}
                      </p>
                    </div>
                  </div>
                  <div
                    id={`cart-panel-quantity-control-${item.id}`}
                    className="flex h-16 flex-col justify-between"
                  >
                    <p className="flex justify-end space-y-2 text-right text-sm">
                      ${item.price} <span className="ml-1 inline">USD</span>
                    </p>
                    <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-neutral-200 dark:border-neutral-700">
                      <button
                        title="Remove item"
                        type="button"
                        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 ml-auto"
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity || 0) - 1)
                        }
                      >
                        <Minus className="h-4 w-4 dark:text-neutral-500" />
                      </button>
                      <p className="w-6 text-center">
                        <span className="w-full text-sm">{item.quantity}</span>
                      </p>
                      <button
                        title="Add item"
                        type="button"
                        className="ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80 mr-auto"
                        onClick={() =>
                          updateItemQuantity(item.id, (item.quantity || 0) + 1)
                        }
                      >
                        <Plus className="h-4 w-4 dark:text-neutral-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p>Taxes</p>
              <p className="text-right text-base text-black dark:text-white">
                $0.00
                <span className="ml-1 inline">USD</span>
              </p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p>Shipping</p>
              <p className="text-right">Calculated at checkout</p>
            </div>
            <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
              <p>Total</p>
              <p className="text-right text-base text-black dark:text-white">
                ${cartTotal}
                <span className="ml-1 inline">USD</span>
              </p>
            </div>
          </div>
          {user?.aud === "authenticated" ? (
            <Button
              type="button"
              className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white  hover:opacity-100"
              onClick={handleCreateOrder}
              isLoading={creatingOrder}
            >
              {creatingOrder ? "" : "Create order"}
            </Button>
          ) : (
            <a
              href="/auth"
              type="button"
              className="block w-full rounded-full bg-blue-600 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
            >
              Sign In
            </a>
          )}
        </>
      )}
    </div>
  );
}
