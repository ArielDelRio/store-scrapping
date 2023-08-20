import { Store } from "src/types";
export declare function extractDataFromLink(link: string): Promise<{
    id: string | null;
    store: Store | null;
}>;
