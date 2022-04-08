import React, { Component } from "react";
import '../component/histori.css'

class Histori extends Component {
    render(){
        return (
            <div>
                <header className="backtgl">
                    <h1 className="tgl">22-06-2022</h1>
                </header>
                <header className="backmenu">
                    <img src="https://img.okezone.com/content/2019/06/19/298/2068239/bisa-buat-bekal-ngantor-ini-cara-buat-roti-panggang-cokelat-keju-NjZzlk07fz.jpg" 
                    className="img" alt="" />
                    <h1 className="judul">Roti Bakar Cokelat</h1>
                    <h1 className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</h1>
                </header>
                <header className="backproduk">
                    <h1 className="textjml">1 Produk</h1>
                    <h1 className="texttotal">Total Pesanan</h1>
                    <h1 className="textharga">Rp. 17,000,00</h1>
                </header>
            </div>
        )
    }
}
export default Histori;