import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import Card from "../../component/cardmenuadmin";
import Header from "../header";
import TambahMenu from "./tambahmenu";
class MenuAdmin extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: [],
            keyword: ""
        }
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        {this.state.menu.map((item, index) => (
                            <div key={index}>
                                <Card
                                    nama={item.nama}
                                    gambar={item.gambar}
                                    harga={item.harga}
                                    deskripsi={item.deskripsi}
                                    onEdit={() => this.Edit(item)}
                                    onDrop={() => this.Drop(item)}
                                />
                                <br></br>
                            </div>
                        ))}
                    </div>
                    <div>
                        <a href="./tambahmenu">
                            <button className="add" onClick={() => this.Add()} >
                                Tambah Menu
                            </button>
                        </a>
                    </div>
                </div>
            </div >

        );

    }

    getMenu = () => {
        let url = "http://localhost:8000/toko/menu";
        axios.get(url)
            .then(response => {
                this.setState({ menu: response.data.data })
            })
            .catch(error => {
                console.log(error);
            })
    }

    componentDidMount() {
        this.getMenu()
    }
}

export default MenuAdmin;