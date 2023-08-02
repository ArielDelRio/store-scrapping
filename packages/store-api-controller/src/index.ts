import axios, { AxiosRequestConfig } from "axios";
import dotenv from "dotenv";
import { Root as SheinProductDetail } from "./types/sheinProductDetailTypes";
import { extractDataFromLink } from "./utils/extractDataFromLink";
import { Params, Store } from "./types";

dotenv.config();

const getSheinProduct = async (
  goods_id: string
): Promise<SheinProductDetail | undefined> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "https://unofficial-shein.p.rapidapi.com/products/detail",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST,
    },
  };

  try {
    const response = await axios.request({
      ...options,
      params: {
        goods_id,
        language: "en",
        country: "US",
        currency: "USD",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getDetailProduct = async (store: Store, params: Params) => {
  if (store === "shein") {
    return await getSheinProduct(params.product_id);
  }
};

const findProductByLink = async (link: string) => {
  try {
    const { id, store } = await extractDataFromLink(link);

    if (!id || !store) {
      throw new Error("Invalid link");
    }

    return await getDetailProduct(store as Store, { product_id: id });
  } catch (error) {
    throw new Error(error as string);
  }
};

export { findProductByLink };
