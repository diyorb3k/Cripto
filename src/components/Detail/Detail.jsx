import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Header from "../Header";
import "../../Scss/Detail.scss";
import ChartComponent from "../Chart/ChartComponent";

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

        const storedCryptoArray = JSON.parse(localStorage.getItem("cryptoDataArray")) || [];

        const cryptoInfo = {
          id: data.id,
          name: data.name,
          market_cap_rank: data.market_cap_rank,
          current_price: data.market_data.current_price.usd,
          market_cap: data.market_data.market_cap.usd,
          image: data.image.large, 
        };

        const isAlreadyStored = storedCryptoArray.some((item) => item.id === cryptoInfo.id);
        if (!isAlreadyStored) {
          storedCryptoArray.push(cryptoInfo);
          localStorage.setItem("cryptoDataArray", JSON.stringify(storedCryptoArray));
        }
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
    <>
      <Header />
      <div className="Detal">
    <div className="container">
      <div className="chcrtt">
      <div className="container detail">
        <div className="img_namee">
          <img className="data_img" src={crypto.image.large} alt={crypto.name} />
          <h4>{crypto.name}</h4>
        </div>
        <div className="description">
          <p>{crypto.description.en.slice(0, 160)}</p>
        </div>
        <p className="wait">
          <strong>Rank:</strong> {crypto.market_cap_rank}
        </p>
        <p className="wait">
          <strong>Current Price:</strong> {crypto.market_data.current_price.usd} USD
        </p>
        <p className="wait">
          <strong>Market Cap:</strong> {crypto.market_data.market_cap.usd} USD
        </p>
      </div>
      <div>
        <ChartComponent />
      </div>
      </div>

  
    </div>
    </div>
    </>
  );
};

export default Detail;
