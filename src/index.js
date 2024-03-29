import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Contact from './components/Contact';
import Registre from './components/Registre';
import Verification from './components/Verification';
import Dashboard from './components/Dashboard';
import './index.css';
import Navbar from './components/Home/navbar/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/registre" element={<Registre />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/navbar" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

