import React, { useState, useEffect, useRef } from 'react';
import '../../Scss/Sidebar.scss'; 
import AnotherComponent from '../Another/AnotherComponent';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [storedDataArray, setStoredDataArray] = useState([]);

  const sidebarRef = useRef(null); 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const storedData = localStorage.getItem('cryptoDataArray');
    setStoredDataArray(JSON.parse(storedData) || []);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';

      window.addEventListener('scroll', handleScrollClose);
     
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';

     
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  const handleScrollClose = () => {
    setSidebarOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  const handleRemoveItem = (index) => {
    const updatedArray = storedDataArray.filter((_, i) => i !== index);
    setStoredDataArray(updatedArray);
    localStorage.setItem('cryptoDataArray', JSON.stringify(updatedArray));
  };

  return (
    <div className="Sidebar">
      <button className="open-sidebar-button" onClick={toggleSidebar}>
        WATCH LIST
      </button>

      <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='btn_item'>
       <h3>WATCHLIST</h3>
        </div>
        
        <div className="sidebar-content">
          {storedDataArray.length > 0 ? (
            storedDataArray.map((crypto, index) => (
              <div key={index} className="crypto-item">
                <img src={crypto.image} alt={crypto.name} className="crypto-image" />
                <p>{crypto.market_cap}</p>
                <button onClick={() => handleRemoveItem(index)}>Remove</button>
              </div>
            ))
          ) : (
            ""
          )}

          <AnotherComponent />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
