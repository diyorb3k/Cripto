import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Header from "../Header";
import "../../Scss/Detail.scss";
import MyChart from "../MyChart/MyChart";
import CryptoChart from "../MyChart/CryptoChart";

const Detail = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const fetchCryptoDetails = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        console.error("Kripto ma'lumotlarni olishda xatolik:", error);
      }
    };

    fetchCryptoDetails();
  }, [id]);

  if (!crypto) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="Detal">
      <Header />
      <div className="container   detail">
        <div className="img_namee">
          <img
            className="data_img"
            src={crypto.image.large}
            alt={crypto.name}
          />
          <h4>{crypto.name}</h4>
        </div>
        <div className="description">
          <p className="description">{crypto.description.en.slice(0, 160)}</p>
        </div>
        <p>
          <strong>Symbol:</strong> {crypto.symbol}
        </p>
        <p>
          <strong>Price:</strong> {crypto.market_data.current_price.usd} USD
        </p>
        <p>
          <strong>Market Cap:</strong> {crypto.market_data.market_cap.usd} USD
        </p>
        <p>
          <strong>24h Change:</strong>{" "}
          {crypto.market_data.price_change_percentage_24h}%
        </p>
      </div>
      <div>
     <CryptoChart/>
      </div>
    </div>
  );
};

export default Detail;
