import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 
import "../Scss/MySwiperComponent.scss";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const MySwiperComponent = () => {
  const [users, setUsers] = useState([]);
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers(); 
  }, []);

  return (
    <Swiper
      dir="rtl"
      navigation={true}
    
      slidesPerView={4} 
      autoplay={{
        delay: 1000, 
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]} 
      className="mySwiper"
    >
      {users.map((user) => (
        <SwiperSlide className="swaper1" key={user.id}>
          <div className="datad">
            <img className="img_data" src={user.image} alt="nao faun img" />
            <div className="price_symbol">
              <span>{user.ath_change_percentage.toFixed(2)}%</span>
              <p className="uppercase-text"> {user.symbol}</p>
            </div>
            <p className="curent">
              {user.current_price}
              <p>  {currency}</p>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
