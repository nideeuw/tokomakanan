import React from "react";
import Card from "../component/cardmenumember";
import Header from "./header";
import axios from "axios";
class Menumember extends React.Component {
    constructor() {
        super()
        this.state = {
            menu: [],
            pesanan: [],
            keyword: ""
        }
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

    Add = selectedItem => {
        let pesan = this.state.pesanan
        pesan.push(selectedItem)
        this.setState({ pesanan: pesan })

        localStorage.setItem("add", JSON.stringify(pesan))
        console.log(localStorage.getItem("add"))
    }

    componentDidMount() {
        this.getMenu()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {/* <input type="text" className="form-control my-2" placeholder="Pencarian"
                            value={this.state.keyword}
                            onChange={ev => this.setState({ keyword: ev.target.value })}
                        // onKeyUp={ev => this.searching(ev)}
                        /> */}
                    <div className="row">
                        {this.state.menu.map((item, index) => (
                            <div>
                                <Card
                                    nama={item.nama}
                                    gambar={item.gambar}
                                    harga={item.harga}
                                    deskripsi={item.deskripsi}
                                    onAdd={() => this.Add(item)}
                                />
                                <br></br>
                            </div>
                        ))}
                    </div>
                    <button className="checkout" onClick={() => this.Add()} >
                        Check Out
                    </button>
                </div>
                <div>
                </div>
            </div>
        )
    }
}

export default Menumember;
