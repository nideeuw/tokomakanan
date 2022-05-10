import React from "react";
import Card from "../component/cardmenumember";
import Checkout from "../pages/checkout";
import { Link, Route, Routes } from 'react-router-dom';
class Menu extends React.Component {
    constructor(){
        super()
        this.state = {
            menu: [
                {
                    nama : "Cireng Bumbu Rujak",
                    deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    harga : 10000,
                    gambar : "https://asset.kompas.com/crops/43_HbqLE2nxTp3RFuxAIb09LhHI=/0x0:970x647/750x500/data/photo/2021/03/01/603c7a153936f.jpg"
                },
                {
                    nama : "Spaghetti Carbonara",
                    deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    harga : 38000,
                    gambar : "https://akcdn.detik.net.id/visual/2020/06/18/spaghetti-carbonara_169.jpeg?w=750&q=90"
                }
            ],
            keyword: ""
        }
        this.state.filterMenu=this.state.menu;
    }
    render(){
        return (
            <div>
            <div>
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                    value={this.state.keyword}
                    onChange={ev => this.setState({keyword: ev.target.value})}
                    // onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    {this.state.filterMenu.map( (item, index) => (
                        <div>
                        <Card
                        nama={item.nama}
                        gambar={item.gambar}
                        harga={item.harga}
                        deskripsi={item.deskripsi}
                        onAdd={ () => this.Add(item)}
                        />
                        <br></br>
                        </div>
                    ))}
                </div>
                <Link to = "/checkout" className="checkout">Check Out</Link>
            </div>
            <div>
            <Routes>
              <Route path= '/checkout' element={<Checkout />}/>
            </Routes>
          </div>
          </div>
          </div>
            )
        }
    }
    
    export default Menu;