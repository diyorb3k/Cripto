import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Autoplay usulini import qilish
import "../Scss/MySwiperComponent.scss";
// import required modules
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
    fetchUsers(); // Funksiyani chaqirish
  }, []);

  return (
    <Swiper
      dir="rtl"
      navigation={true}
    //   pagination={{
    //     clickable: true,
    //   }}
      slidesPerView={4} // To'rtta slaydni ko'rsatish
      autoplay={{
        delay: 1000, // Har 3 soniyada slaydlar o'zgaradi
        disableOnInteraction: false, // Foydalanuvchi o'zaro ta'sir qilsa, aylantirishni to'xtatmaydi
      }}
      modules={[Navigation, Pagination, Autoplay]} // Autoplay modulini qo'shish
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
