import { NextResponse } from "next/server";
import { findProductByLink } from "store-api-controller";

export async function GET(request: Request) {
  const { search } = new URL(request.url);
  const link = search.replace("?link=", "");

  if (!link) {
    return NextResponse.json(400);
  }
  try {
    const product = await findProductByLink(link as string);

    console.log({ link });
    console.log({ product });

    return NextResponse.json(product);
  } catch (error) {
    console.log("Error in api/store", { error });
    return NextResponse.json(error);
  }
}
