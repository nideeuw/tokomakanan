import React, { Component } from "react";
import '../component/histori.css';
import Card from '../component/card';
import axios from 'axios';

class Histori extends Component {
    constructor(){
        super()
        this.state = {
            histori: [
                {
                    tgl:"22-06-2022",
                    judul:"Roti Bakar Cokelat",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    total:"Total Pesanan: ",
                    jumlah:"1",
                    harga: 17000,
                    cover:"https://img.okezone.com/content/2019/06/19/298/2068239/bisa-buat-bekal-ngantor-ini-cara-buat-roti-panggang-cokelat-keju-NjZzlk07fz.jpg"
                },
                {
                    tgl:"08-06-2022",
                    judul:"Spaghetti Carbonara",
                    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    total:"Total Pesanan: ",
                    jumlah:"1",
                    harga: 38000,
                    cover:"https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/61FCB2B2-DB84-4A68-ABB8-F9FBA800BCA3/Derivates/FCB48A53-86F0-4697-BE75-7B7CE9B49EBE.jpg"
                },
            ],

            tgl: "",
            judul: "",
            desc: "",
            jumlah: "",
            total: "",
            harga: 0,
            cover: "",
            selectedItem: null,
        }
        this.state.filterHistori=this.state.histori
    }
    render(){
        return (
            <div className="container">
                <input type="text" className="form-control my-2" placeholder="Pencarian"
                value={this.state.keyword}
                onChange={ev => this.setState({keyword: ev.target.value})}
                onKeyUp={ev => this.searching(ev)}
                />
                <div className="row">
                    { this.state.filterHistori.map( (item, index) => (
                        <Card
                        tgl={item.tgl}
                        judul={item.judul}
                        desc={item.desc}
                        jumlah={item.jumlah}
                        total={item.total}
                        harga={item.harga}
                        cover={item.cover}
                        />
                    ))}
                </div>
            </div>
        );
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