import React, { useState, Fragment } from "react";
import { Menu, Transition } from '@headlessui/react';
import Login from './pages/login';
import Home from './pages/home';
import Menumember from './pages/menumember';
import Histori from './pages/histori';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/menu' element={<Menumember />} />
          <Route path='/histori' element={<Histori />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
