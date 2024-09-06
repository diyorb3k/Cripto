import React from 'react';

const AnotherComponent = ({ savedData }) => {
  if (!savedData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Saved Data:</h1>
      <p>{savedData.name}</p>
      <p>{savedData.symbol}</p>
      {/* Boshqa ma'lumotlarni ham ko'rsatishingiz mumkin */}
    </div>
  );
};

export default AnotherComponent;
