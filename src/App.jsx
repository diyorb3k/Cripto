import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Detail from "./components/Detail/Detail"; 
import '../src/App.css';

const App = () => {
  return (
    <Router>
      <div className="Appp">
        <Routes>
          <Route path="/" element={<Hero />} /> 
          <Route path="/detail/:id" element={<Detail />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
