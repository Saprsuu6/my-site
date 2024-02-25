import { serverBaseurl } from "./defaultService";

export function getCryptos() {
  return fetch(`${serverBaseurl}/.netlify/functions/getCrypto`, {
    method: "GET",
    headers: {
      Accept: "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      Connection: "keep-alive",
    },
  }).then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}
