"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProductByLink = void 0;
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
const extractDataFromLink_1 = require("./utils/extractDataFromLink");
dotenv_1.default.config();
const getSheinProduct = (goods_id) => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        method: "GET",
        url: "https://unofficial-shein.p.rapidapi.com/products/detail",
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RAPID_API_HOST,
        },
    };
    try {
        const { data } = yield axios_1.default.request(Object.assign(Object.assign({}, options), { params: {
                goods_id,
                language: "en",
                country: "US",
                currency: "USD",
            } }));
        return Object.assign(Object.assign({}, data.info), { store: "shein" });
    }
    catch (error) {
        throw new Error(error);
    }
});
const getDetailProduct = (store, params) => __awaiter(void 0, void 0, void 0, function* () {
    if (store === "shein") {
        return yield getSheinProduct(params.product_id);
    }
});
const findProductByLink = (link) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, store } = yield (0, extractDataFromLink_1.extractDataFromLink)(link);
        if (!id || !store) {
            throw new Error("Invalid link");
        }
        return yield getDetailProduct(store, { product_id: id });
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.findProductByLink = findProductByLink;
//# sourceMappingURL=index.js.map
