import { coinsInfo } from "../app/services/cryptoService";

export const neededBitcoinNameArray = [
  "Bitcoin",
  "Ethereum",
  "BNB",
  "XRP",
  "Solana",
  "Cardano",
  "Avalanche",
  "Dogecoin",
  "TRON",
  "Polkadot",
  "Chainlink",
  "Polygon",
  "Toncoin",
  "Shiba Inu",
  "Litecoin",
  "Bitcoin Cash",
  "Cosmos Hub",
  "Uniswap",
  "Stellar",
  "OKB",
  "Monero",
  "Ethereum Classic",
];

interface CoinInfo {
  name: string;
  usd: number;
  usd_24h_change: number;
}

const neededCoins: Array<CoinInfo> = [];

export async function getCoins() {
  if (neededCoins.length <= 0) {
    let array: any = undefined;

    try {
      array = await coinsInfo();
    } catch (error) {
      throw new Error("We are sorry, something went wrong");
    }

    const allNeededCoins = array.filter((coin: any) => neededBitcoinNameArray.includes(coin.name));

    const newArrayWithConcreteFields: CoinInfo[] = allNeededCoins.map((coin: any) => ({
      name: coin.name,
      usd: coin.current_price,
      usd_24h_change: coin.price_change_percentage_1h_in_currency,
    }));

    neededCoins.push(...newArrayWithConcreteFields);
    setInterval(() => {
      neededCoins.length = 0;
    }, 1 * 60 * 1000);
  }

  return neededCoins;
}
