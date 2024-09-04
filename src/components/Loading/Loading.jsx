import React from 'react';
import '../../Scss/Loading.scss'; // CSS faylini import qilish

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loading;