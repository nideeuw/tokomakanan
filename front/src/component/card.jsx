import React from "react"
import '../component/histori.css'

class Card extends React.Component{
    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                    <h6 className="backmenu"></h6>
                        {/*menampilkan Gambar / cover */}
                        <div className="col-6">
                            <img src={this.props.cover} className="img" height="200" />
                        </div>

                        {/*menampilkan deskripsi */}
                        <div className="col-8">
                            <h6 className="judul">
                                { this.props.judul }
                            </h6>
                            <h6 className="backtgl"></h6>
                            <h6 className="tgl">
                                { this.props.tgl }
                            </h6>
                            <h6 className="desc">
                                { this.props.desc }
                            </h6>
                            <h6 className="backproduk"></h6>
                            <h6 className="textjml">
                                x{ this.props.jumlah }
                            </h6>
                            <h6 className="texttotal">
                                { this.props.total }
                            </h6>
                            <h6 className="textharga">
                                Rp. { this.props.harga }
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;