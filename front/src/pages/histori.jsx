import React, { Component } from "react";
import '../component/histori.css';
import axios from 'axios';

class Histori extends Component {
    constructor(){
        super();
        this.state={
            history: []
        }
    }

    render(){
        return (
            <div>
                <header className="backtgl">
                    <h1 className="tgl">22-06-2022</h1>
                </header>
                <div className="backmenu">
                    <img src="https://img.okezone.com/content/2019/06/19/298/2068239/bisa-buat-bekal-ngantor-ini-cara-buat-roti-panggang-cokelat-keju-NjZzlk07fz.jpg" 
                    className="img" alt="" />
                    <h1 className="judul">Roti Bakar Cokelat</h1>
                    <h1 className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
                </div>
                <div className="backproduk">
                    <h1 className="textjml">1 Produk</h1>
                    <h1 className="texttotal">Total Pesanan</h1>
                    <h1 className="textharga">Rp. 17,000,00</h1>
                </div>
            </div>
        )
    }

    getHistory= () => {
        let url = "http://localhost:8000/toko/tampil";

        axios.get(url)
        .then(response =>{
            this.setState({history: response.data.history})
        })
        .catch(error =>{
            console.log(error);
        })
    }

    componentDidMount(){
        this.getHistory()
    }
}
export default Histori;