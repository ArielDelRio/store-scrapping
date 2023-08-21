"use client";

import { CartProvider as ReactCartProvider } from "react-use-cart";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReactCartProvider>{children}</ReactCartProvider>;
}
