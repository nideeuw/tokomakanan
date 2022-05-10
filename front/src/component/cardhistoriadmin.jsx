import React from "react"
import '../component/historimember.css'
    class Cardhistori extends React.Component{
    render(){
        return (
                <div className="backproduk">
                    
                        {/* menampilkan Gambar / gambar */}
                        <div className="image">
                            <img src={this.props.gambar}/>
                        </div>
                        
                        {/* menampilkan deskripsi */}
                        <div>
                            <h5 className="nama">
                                {this.props.nama}
                            </h5>
                            
                            <h5 className="tanggal">
                                {this.props.tgl}
                            </h5>

                            <h5 className="produk">
                                {this.props.produk}
                            </h5>

                            <h5 className="desc">
                                { this.props.desc}
                            </h5>

                            <h5 className="harga">
                                Rp { this.props.harga}
                            </h5>

                            <h5 className="total">
                                Total Pesanan : Rp { this.props.total}
                            </h5>

                            <h5 className="banyakproduk">
                                { this.props.banyakproduk} Produk
                            </h5>

                            <h5 className="jumlah">
                                { this.props.jumlah}x
                            </h5>
                        </div>
                </div>
                
        )
    }

    
}
export default Cardhistori;