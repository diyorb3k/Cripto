import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Detail from "./components/Detail/Detail"; 
import AnotherComponent from "./components/Another/AnotherComponent"; // Boshqa component
import '../src/App.css';

const App = () => {
  const [savedData, setSavedData] = useState(null); // Ma'lumotlarni saqlash uchun holat

  return (
    <Router>
      <div className="Appp">
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/detail/:id" element={<Detail setSavedData={setSavedData} />} /> 
          <Route path="/another" element={<AnotherComponent savedData={savedData} />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
