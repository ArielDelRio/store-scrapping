import { NextResponse } from "next/server";
import { findProductByLink } from "store-api-controller";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const link = searchParams.get("link");

  if (!link) {
    return NextResponse.json(400);
  }
  try {
    const product = await findProductByLink(link as string);
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(error);
  }
}
