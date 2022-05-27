import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import MenuAdmin from './pages/menuadmin';
import Histori from './pages/histori';
import Cart from "./pages/keranjang";
import Checkout from './pages/checkout';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<MenuAdmin />} />
          <Route path='/histori' element={<Histori />} />
          <Route path='/keranjang' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
