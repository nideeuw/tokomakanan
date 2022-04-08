import React from 'react'
import Home from './pages/home';
import Histori from './pages/histori';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <div>
                <header className="rectangle5">
                    <h1 className="textbrand">Brand Name</h1>
                    <Link to ="/" className="texthome">Home</Link>
                    <h1 className="textmenu">Menu</h1>
                    <Link to = "/histori" className="texthistori">Histori</Link>
                    <h1 className="textlogout">Logout</h1>
                    
                </header>
                </div>

    <div>
      <Routes>
        <Route path= '/' element={<Home />}/>
        <Route path= '/histori' element={<Histori />}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;
