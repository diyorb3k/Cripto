import React from 'react';

const AnotherComponent = ({ savedData }) => {
  if (!savedData) {
    return <div>

    </div>;
  }

  return (
    <div>
      <h1>Saved Data:</h1>
      <p>{savedData.name}</p>
      <p>{savedData.symbol}</p>
     
    </div>
  );
};

export default AnotherComponent;
