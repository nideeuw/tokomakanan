import React, {Component} from "react";
import $ from "jquery";
import Card from "../component/cardmenuadmin";
class Menu extends React.Component {
    constructor(){
        super()
        this.state = {
            menu: [
                {
                    nama : "Cireng Bumbu Rujak",
                    deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    harga : 10000,
                    gambar : "https://asset.kompas.com/crops/43_HbqLE2nxTp3RFuxAIb09LhHI=/0x0:970x647/750x500/data/photo/2021/03/01/603c7a153936f.jpg"
                },
                {
                    nama : "Spaghetti Carbonara",
                    deskripsi : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
                    harga : 38000,
                    gambar : "https://akcdn.detik.net.id/visual/2020/06/18/spaghetti-carbonara_169.jpeg?w=750&q=90"
                }
            ],
            keyword: ""
        }
        this.state.filterMenu=this.state.menu;
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
                    {this.state.filterMenu.map( (item, index) => (
                        <div>
                        <Card
                        nama={item.nama}
                        gambar={item.gambar}
                        harga={item.harga}
                        deskripsi={item.deskripsi}
                        onEdit={ () => this.Edit(item)}
                        onDrop={ () => this.Drop(item)}
                        />
                        <br></br>
                        </div>
                    ))}
                </div>
                <button className="add" onClick={() => this.Add()} >
                        Tambah Menu
                </button> 
                
                <div className="modal" id="modal_menu">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="text">
                                New Menu
                            </div>
                            <div>
                            <form onSubmit={ev => this.Save(ev)}>
                                    Nama Produk
                                <input type="text" className="form"
                                    value={this.state.nama}
                                    onChange={ ev => this.setState({nama:
                                    ev.target.value}) }
                                    required />

                                    Harga Produk
                                <input type="number" className="form"
                                    value={this.state.harga}
                                    onChange={ ev => this.setState({harga:
                                    ev.target.value}) }
                                    required />
                                    
                                    Deskripsi Produk
                                <input type="text" className="form"
                                    value={this.state.desc}
                                    onChange={ ev => this.setState({desc:
                                    ev.target.value}) }
                                    required />

                                    Gambar Produk
                                <input type="url" className="form"
                                    value={this.state.cover}
                                    onChange={ ev => this.setState({cover:
                                    ev.target.value}) }
                                    required />

                                <button className="simpan" type="submit">
                                    Simpan
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
            );
        
    } 

    Add = () => {
    // menampilkan komponen modal
    $("#modal_menu").show();
    this.setState({
        nama: "",
        gambar: "",
        harga: 0,
        desc: "",
        action: "insert"
        })
    }
    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_menu").show();
        this.setState({
        nama: item.nama,
        gambar: item.gambar,
        desc: item.desc,
        action: "update",
        selectedItem: item
        })
    }
    Save = (menu) => {
        menu.preventDefault();
        // menampung data state menu
        let tempMenu = this.state.menu
        if (this.state.action === "insert") {
        // menambah data baru
        tempMenu.push({
        nama: this.state.nama,
        harga: this.state.harga,
        desc: this.state.desc,
        gambar: this.state.gambar,
        })
    }else if(this.state.action === "update"){
        // menyimpan perubahan data
        let index = tempMenu.indexOf(this.state.selectedItem)
        tempMenu[index].nama = this.state.nama
        tempMenu[index].desc = this.state.desc
        tempMenu[index].harga = this.state.harga
        tempMenu[index].gambar = this.state.gambar
    }
    this.setState({menu : tempMenu})
    // menutup komponen modal_menu
    $("#modal_menu").hide();
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        // menghapus data
        let tempMenu = this.state.menu
        // posisi index data yg akan dihapus
        let index = tempMenu.indexOf(item)
        // hapus data
        tempMenu.splice(index, 1)
        this.setState({menu: tempMenu})
        }
    }
    componentDidMount(){
        $("#modal_menu").hide();
    }
}
    
    export default Menu;