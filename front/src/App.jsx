import React from 'react';
import Login from './pages/login';
import Home from './pages/home';
import HomeAdmin from './pages/admin/homeadmin';
import MenuAdmin from './pages/admin/menuadmin';
import Histori from './pages/historimember';
import Tambahmenu from './pages/admin/tambahmenu';
import Cart from './pages/keranjang';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Signup from './pages/signup';
import Menumember from './pages/menumember';

class App extends React.Component {

  render() {
    return (
      <div className="">
        <div>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/home' element={<Home />} />
            <Route path='/homeadmin' element={<Home />} />
            <Route path='/menuadmin' element={<MenuAdmin />} />
            <Route path='/menu' element={<Menumember />} />
            <Route path='/tambahmenu' element={<Tambahmenu />} />
            <Route path='/histori' element={<Histori />} />
            <Route path='/keranjang' element={<Cart />} />
            {/* {(()=>{
              if(this.state.role)
            })()} */}
          </Routes>
        </div>
      </div>
    );
  }

}

export default App;
