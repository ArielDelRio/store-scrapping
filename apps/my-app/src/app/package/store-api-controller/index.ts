import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import {
  SheinApiResponse,
  SheinProductDetails,
} from "./types/sheinProductDetailTypes";
import { extractDataFromLink } from "./utils/extractDataFromLink";
import { Params, Product, Store } from "./types";

const getSheinProduct = async (
  goods_id: string
): Promise<SheinProductDetails | never> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/detail",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST,
    },
  };

  try {
    const { data }: AxiosResponse<SheinApiResponse> = await axios.request({
      ...options,
      params: {
        goods_id,
        language: "en",
        country: "US",
        currency: "USD",
      },
    });

    return { ...data.info, store: "shein" };
  } catch (error) {
    throw new Error(error as string);
  }
};

const getDetailProduct = async (
  store: Store,
  params: Params
): Promise<Product> => {
  if (store === "shein") {
    return await getSheinProduct(params.product_id);
  }
};

const findProductByLink = async (link: string): Promise<Product> => {
  try {
    const { id, store } = await extractDataFromLink(link);

    console.log({ id, store });

    if (!id || !store) {
      throw new Error("Invalid link");
    }

    return await getDetailProduct(store, { product_id: id });
  } catch (error) {
    console.log("Error in findProductByLink", { error });
    throw new Error(error as string);
  }
};

export { findProductByLink };
