import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<Layout />} />
      </Routes>
      
    </div>
  );
}

export default App;
