import React from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "../../withRouter";
import axios from "axios";

class Tambahmenu extends React.Component {
    constructor() {
        super()
        this.state = {
            nama: "",
            deskripsi: "",
            harga: 0,
            gambar: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleClick = () => {
        this.props.navigate('/menu');
    }

    save = (event) => {
        let sendData = {
            nama: this.state.nama,
            deskripsi: this.state.deskripsi,
            harga: this.state.harga,
            gambar: this.state.gambar,
        }
        let url = "http://localhost:8000/toko/menu"
        axios.post(url, sendData)
            .then(response => {
                window.alert(response.data.message)
                this.props.navigate("/menu")
            })
            .catch(error => console.log(error))

    }

    render() {
        return (
            <div>
                <div class="font - sans">
                    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-stone-200">
                        <div class="relative sm:max-w-sm w-full">
                            <div>
                                <Link to="/menuadmin" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </Link>
                            </div>
                            {/* <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div> */}
                            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                                <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                    Tambah Menu
                                </label>
                                <form method="#" onSubmit={ev => this.save(ev)} class="mt-10">
                                    <div class="mt-7">
                                        <input type="text" name="nama" placeholder=" Nama Produk" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>

                                    <div class="mt-7">
                                        <input type="text" name="deskripsi" placeholder=" Deskripsi Produk" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>

                                    <div class="mt-7">
                                        <input type="number" name="harga" placeholder=" Harga" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>

                                    <div class="mt-7">
                                        <input type="url" name="gambar" placeholder=" Gambar" onChange={this.bind} class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                                    </div>

                                    <div class="mt-7">
                                        <button type="submit" class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Simpan
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Tambahmenu);