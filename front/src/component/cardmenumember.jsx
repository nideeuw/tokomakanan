import React from "react"
import '../component/menumember.css'
    class Card extends React.Component{
    render(){
        return (
                <div className="card">
                    
                        {/* menampilkan Gambar / gambar */}
                        <div className="image">
                            <img src={this.props.gambar}/>
                        </div>
                        
                        {/* menampilkan deskripsi */}
                        <div>
                            <h5 className="namaproduk">
                                {this.props.nama}
                            </h5>

                            <h6 className="deskripsi">
                                { this.props.deskripsi}
                            </h6>

                            <h6 className="harga">
                                Rp { this.props.harga}
                            </h6>

                            {/* button untuk mengedit */}
                            <button className="add" onClick={this.props.onAdd}>
                                +
                            </button>
                        </div>
                </div>

        )
    }
    
}
export default Card;