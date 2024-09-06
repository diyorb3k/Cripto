import React, { useState, useEffect, useRef } from 'react';
import '../../Scss/Sidebar.scss'; 
import AnotherComponent from '../Another/AnotherComponent';

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [storedDataArray, setStoredDataArray] = useState([]);

  const sidebarRef = useRef(null); // Reference for the sidebar

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

      // Add scroll event listener when sidebar is open
      window.addEventListener('scroll', handleScrollClose);
      // Add mousedown event listener for closing sidebar on outside click
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';

      // Remove the scroll event listener and outside click listener when sidebar is closed
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  // Function to handle closing the sidebar on scroll
  const handleScrollClose = () => {
    setSidebarOpen(false);
  };

  // Function to handle closing sidebar if clicked outside
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  // Function to handle removing an item
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
            <p>No data available in Watch List.</p>
          )}

          <AnotherComponent />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
