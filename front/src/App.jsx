import React from 'react'
import Home from './pages/home';
import Histori from './pages/historiadmin';
import Menu from './pages/menuadmin';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <div>
      <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/menuadmin' element={<Menu />}/>
        <Route path= '/historiadmin' element={<Histori />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
