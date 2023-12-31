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
exports.extractDataFromLink = void 0;
const axios_1 = __importDefault(require("axios"));
function extractDataFromLink(link) {
    return __awaiter(this, void 0, void 0, function* () {
        const decodedLink = decodeURIComponent(link);
        const domainRegex = /https?:\/\/([^/]+)\//g;
        const domainMatch = domainRegex.exec(decodedLink);
        const domain = domainMatch && domainMatch[1] ? domainMatch[1] : null;
        if (!domain) {
            throw new Error("Invalid link");
        }
        if (domain === "api-shein.shein.com") {
            const id = yield getIdFromSheinApiLink(decodedLink);
            return { id, store: "shein" };
        }
        if (domain === "us.shein.com") {
            const idRegex = /-p-(\d+)-cat/g;
            const idMatch = idRegex.exec(decodedLink);
            const id = idMatch && idMatch[1] ? idMatch[1] : null;
            return { id, store: "shein" };
        }
        return {
            id: null,
            store: null,
        };
    });
}
exports.extractDataFromLink = extractDataFromLink;
/**
 * Extracts the shareInfo object from a Shein API link and logs it to the console.
 * @param link - A Shein API link.
 */
const getIdFromSheinApiLink = (link) => {
    return new Promise((resolve, reject) => {
        axios_1.default.get(link).then((response) => {
            const shareInfoRegex = /var shareInfo = (\{.*?\});/s;
            const match = response.data.match(shareInfoRegex);
            if (match && match[1]) {
                try {
                    const shareInfoObject = JSON.parse(match[1]);
                    resolve(shareInfoObject === null || shareInfoObject === void 0 ? void 0 : shareInfoObject.shareId);
                }
                catch (error) {
                    reject(new Error("Error parsing shareInfo"));
                }
            }
            else {
                reject(new Error("shareInfo not found."));
            }
        });
    });
};
//# sourceMappingURL=extractDataFromLink.js.map