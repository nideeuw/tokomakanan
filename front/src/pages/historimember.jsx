import React, { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import Cardhistori from "../component/cardhistoriadmin";
class Histori extends Component {
    constructor() {
        super();
        this.state = {
            history: [
                {
                    gambar: "https://img.okezone.com/content/2019/06/19/298/2068239/bisa-buat-bekal-ngantor-ini-cara-buat-roti-panggang-cokelat-keju-NjZzlk07fz.jpg",
                    nama: "Roti Bakar",
                    deskripsi: "Jajanan roti di goreng",
                    tanggal: "11 Mei",
                    member: "Sutar",
                    hargaAwal: 25000,
                    hargaAkhir: 17000,
                    jumpes: 1,
                    total: 17000
                },
                {
                    gambar: "https://akcdn.detik.net.id/api/wm/2020/06/18/spaghetti-carbonara_169.jpeg",
                    nama: "Pizza",
                    deskripsi: "Makanan cepat saji dengan aneka rasa dan toping",
                    tanggal: "12 Mei",
                    member: "Sutar",
                    hargaAwal: 30000,
                    hargaAkhir: 25000,
                    jumpes: 1,
                    total: 25000
                }
            ],
            namaBarang: "Roti "
        }
        this.state.filter = this.state.history;
    }

    render() {
        return (
            <div>
                <Header />
                <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex justify-start item-start space-y-2 flex-col ">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
                        <p className="text-base font-medium leading-6 text-gray-600">22nd June 2022 at 10:34 PM</p>
                    </div>
                    <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                            {this.state.filter.map((item, index) => (
                                <div className="flex flex-col justify-start items-start bg-zinc-100 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full rounded-xl">
                                    <Cardhistori
                                        gambar={item.gambar}
                                        nama={item.nama}
                                        tanggal={item.tanggal}
                                        hargaAwal={item.hargaAwal}
                                        hargaAkhir={item.hargaAkhir}
                                        member={item.member}
                                        jumpes={item.jumpes}
                                        total={item.total}
                                        deskripsi={item.deskripsi}
                                    />
                                    <br></br>
                                </div>
                            ))}

                            <div className="flex justify-end md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-3/5 bg-zinc-100 space-y-6 rounded-xl  ">
                                    <h3 className="text-xl font-semibold leading-5 text-gray-800">Summary</h3>
                                    <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                        <div className="flex justify-between  w-full">
                                            <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                            <p className="text-base leading-4 text-gray-600">Rp55.000</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">
                                                Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                            </p>
                                            <p className="text-base leading-4 text-gray-600">-Rp10.000</p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-base leading-4 text-gray-800">Shipping</p>
                                            <p className="text-base leading-4 text-gray-600">Rp10.000</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center w-full">
                                        <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                        <p className="text-base font-semibold leading-4 text-gray-600">Rp55.000</p>
                                    </div>
                                </div>
                                {/* <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                                <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                                <div className="flex justify-between items-start w-full">
                                    <div className="flex justify-center items-center space-x-4">
                                        <div class="w-8 h-8">
                                            <img class="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                        </div>
                                        <div className="flex flex-col justify-start items-center">
                                            <p className="text-lg leading-6 font-semibold text-gray-800">
                                                DPD Delivery
                                                <br />
                                                <span className="font-normal">Delivery with 24 Hours</span>
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-semibold leading-6 text-gray-800">$8.00</p>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                    <button className="hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
                                </div>
                            </div> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
};

export default Histori;

