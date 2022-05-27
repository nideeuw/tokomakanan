import React from "react"
import '../component/menuadmin.css'
class Card extends React.Component {
    render() {
        return (
            <div className="card">

                {/* menampilkan Gambar / gambar */}
                <div className="image">
                    <img src={this.props.gambar} />
                </div>

                {/* menampilkan deskripsi */}
                <div>
                    <h5 className="namaproduk">
                        {this.props.nama}
                    </h5>

                    <h6 className="deskripsi">
                        {this.props.deskripsi}
                    </h6>

                    <h6 className="harga">
                        Rp {this.props.harga}
                    </h6>

                    {/* button untuk mengedit */}
                    <button className="edit" onClick={this.props.onEdit}>
                        Edit
                    </button>
                    {/* button untuk menghapus */}
                    <button className="hapus" onClick={this.props.onDrop}>
                        Hapus
                    </button>
                </div>
            </div>

        )
    }


}
export default Card;