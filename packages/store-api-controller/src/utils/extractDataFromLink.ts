import { Domains, Store } from "src/types";

export async function extractDataFromLink(link: string): Promise<{
  id: string | null;
  store: Store | null;
}> {
  const domainRegex = /https?:\/\/([^/]+)\//g;
  const domainMatch = domainRegex.exec(link);
  const domain = domainMatch && domainMatch[1] ? domainMatch[1] : null;

  if (!domain) {
    throw new Error("Invalid link");
  }

  if ((domain as Domains) === "api-shein.shein.com") {
    const id = await getIdFromSheinApiLink(link);

    return { id, store: "shein" };
  }

  if ((domain as Domains) === "us.shein.com") {
    const idRegex = /-p-(\d+)-cat/g;
    const idMatch = idRegex.exec(link);

    const id = idMatch && idMatch[1] ? idMatch[1] : null;

    return { id, store: "shein" };
  }

  return {
    id: null,
    store: null,
  };
}

/**
 * Extracts the shareInfo object from a Shein API link and logs it to the console.
 * @param link - A Shein API link.
 */
const getIdFromSheinApiLink = (link: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fetch(link)
      .then((response) => response.text())
      .then((data) => {
        const shareInfoRegex = /var shareInfo = (\{.*?\});/s;
        const match = data.match(shareInfoRegex);

        if (match && match[1]) {
          try {
            const shareInfoObject = JSON.parse(match[1]);

            resolve(shareInfoObject?.shareId);
          } catch (error) {
            reject(new Error("Error parsing shareInfo"));
          }
        } else {
          reject(new Error("shareInfo not found."));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
