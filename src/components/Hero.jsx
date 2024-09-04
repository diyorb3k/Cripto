import React, { useEffect, useState } from "react";
import "../Scss/Hero.scss";
import Pagination from "@mui/material/Pagination";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Link import qilish
import Header from "./Header"; // Header komponentini import qilish
import MySwiperComponent from "./MySwiperComponent";
import Loading from "./Loading/Loading";

const Hero = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currency, setCurrency] = useState("USD"); 
  const [searchTerm, setSearchTerm] = useState(""); // Qidiruv uchun qiymat
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=24h`
        );
        const data = await response.json();
        setCryptocurrencies(data);

        const totalResults = 1000;
        setTotalPages(Math.ceil(totalResults / 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCryptocurrencies();
  }, [page, currency]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const filteredCryptos = cryptocurrencies.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header currency={currency} setCurrency={setCurrency} />
      <div className="Hero">
        <div className="container">
          <h1>CRYPTOFOLIO WATCH LIST</h1>
          <p>Get all the Info regarding your favorite Crypto Currency</p>
          <MySwiperComponent />
        </div>
      </div>
      <div className="data">
        <div className="container">
          <h2>Cryptocurrency Prices by Market Cap</h2>
          <input
            type="text"
            placeholder="Search for a cryptocurrency..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="crypto-table">
            <table>
              <thead>
                <tr>
                  <th className="thad">Coin</th>
                  <th className="thad curentt">Price ({currency})</th>
                  <th className="thad">24h Change (%)</th>
                  <th className="thad">Market Cap ({currency})</th>
                </tr>
              </thead>
              <tbody>
                
                {filteredCryptos.length === 0 ? (
                  <tr>
                    <td colSpan="4">Api ishlamayabdi</td>
                    
                  </tr>
                ) : (
                  filteredCryptos.map((crypto) => (
                    <tr
                      key={crypto.id}
                      className="crypto-row"
                      onClick={() => navigate(`/detail/${crypto.id}`)}
                    >
                      <td className="img_name">
                        <img
                          src={crypto.image}
                          alt={crypto.name}
                          className="crypto-image"
                        />
                        <div className="symbol_name">
                          <p className="uppercase-text">{crypto.symbol}</p>
                          <p>{crypto.name}</p>
                        </div>
                      </td>
                      <td className="curentt">
                        {crypto.current_price} {currency}
                      </td>
                      <td style={{ color: crypto.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                        <FaEye className="faeye" />{" "}
                        {crypto.price_change_percentage_24h}%
                      </td>
                      <td>
                        {crypto.market_cap} {currency}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <Pagination
            className="pagination"
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
