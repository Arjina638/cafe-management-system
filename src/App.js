import React from 'react';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OrderForm from './pages/OrderForm';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Routes>
      <Route path= "/" element={<Login />}/>
      <Route path= "/login" element={<Login />}/>
      <Route path= "/order" element={<OrderForm />} />
      <Route path= "/home" element={<Homepage />}/>
      <Route path= "/dashboard" element={<Dashboard />}/>

    </Routes>
  );
}

export default App;
