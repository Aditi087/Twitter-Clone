import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Footer1 from './components/footer/Footer1';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
