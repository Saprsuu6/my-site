import React from "react";
import Marquee from "react-fast-marquee";
import cryptoStyles from "./CryptosInfo.module.css";
import { getCryptos } from "../../services/cryptoService";

type CryptoInfo = {
  name: string;
  usd: number;
  usd_24h_change: number;
}[];

const CryptosInfo = () => {
  const [cryptos, setCryptos] = React.useState<CryptoInfo>([]);

  const getCryptosRemote = () => {
    getCryptos()
      ?.then((res: CryptoInfo) => {
        setCryptos(res);
      })
      .catch((err) => {
        err.then((errorData: any) => {
          console.log(errorData);
        });
      });
  };

  React.useEffect(() => {
    getCryptosRemote();

    const interval = setInterval(getCryptosRemote, 1 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumbers = (num: number) => {
    if (num.toString().includes(".")) {
      const parts = num.toString().split(".");
      if (parts[0].length >= 2) {
        return `${parts[0]}.${parts[1].substring(0, 2)}`;
      } else if (parts[0].length < 2) {
        return `${parts[0]}.${parts[1].substring(0, 4)}`;
      }
    } else return num.toString();
  };

  const isNumNegative = (num: number) => {
    return num < 0;
  };

  const dCountPositive = {
    color: "#A9FF10",
  };

  const dCountNegative = {
    color: "#FF5310",
  };

  return (
    <Marquee
      className={cryptoStyles.marquee}
      autoFill={true}
      play={true}
      speed={60}
    >
      {cryptos.map((crypto, index) => (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <div className={cryptoStyles.cryptos_info_block}>
            <h2>{crypto.name}</h2>
            <p>${formatNumbers(crypto.usd)}</p>
            <span
              style={
                isNumNegative(crypto.usd_24h_change)
                  ? dCountNegative
                  : dCountPositive
              }
            >
              {formatNumbers(crypto.usd_24h_change)}%
            </span>
          </div>
          <span>&#8226;</span>
        </div>
      ))}
    </Marquee>
  );
};

export default CryptosInfo;
