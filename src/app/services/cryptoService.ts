import { serverBaseurl } from "./defaultService";

export function getCryptos() {
  return fetch(`${serverBaseurl}/getCryptoInfo`, {
    method: "GET",
  }).then((response) => {
    if (!response.ok) {
      throw response.json();
    }
    return response.json();
  });
}
