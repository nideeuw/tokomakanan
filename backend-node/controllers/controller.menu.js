const e = require("cors")
const db=require("../db")

module.exports ={
    getAllMenu : (req,res) =>{
        db.query('SELECT * from menu', (err, result)=>{
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All Menu',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'no Found Menu'
                    })
                }
            }
        })
    },

    getMenu: (req, res)=>{
        const id = req.params.id
        db.query(`SELECT * from menu where id_menu=${id}`, (err, result)=>{
            if(err){
                res.status(500).json({
                    message: "Internal server"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: "Connect",
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: "not found"
                    })
                }
            }
        })
    },

    postMenu: (req, res)=>{
        const datanew ={
            nama: req.body.nama,
            deskripsi: req.body.deskripsi,
            harga: req.body.harga,
            gambar: req.body.gambar
        }
        db.query(`INSERT INTO menu set ?`,datanew, (err, result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "internal error"
                })
            }else{
                res.status(201).json({
                    message: 'Data baru ditambahkan',
                    data: {
                        ...datanew
                    }
                })
            }
        })
    },

    putMenu: (req, res)=>{
        const id = req.params.id
        const {nama, deskripsi, harga, gambar} = req.body
        let sql = `UPDATE menu SET nama = '${nama}', deskripsi = '${deskripsi}', harga = '${harga}', gambar = '${gambar}' WHERE id_menu = ${id}`
        db.query(sql, (err, result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "internal error"
                })
            }else{
                res.status(200).json({
                    message: 'Data baru ditambahkan',
                    data: {
                        nama,
                        deskripsi,
                        harga,
                        gambar
                    }
                })
            }
        })
    },

    deleteMenu: (req,res)=>{
        const id = req.params.id
        db.query(`DELETE FROM menu where id_menu = ${id}`, (err, result)=>{
            if(err){
                res.status(500).json({
                    message: 'Internal server error'
                })
            }else{
                res.json({
                    message: 'berhasil menghapus menu'
                })
            }
        })
    },

    getAllGambar: (req, res) =>{
        db.query(`SELECT gambar from menu`, (err, result)=>{
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All gambar',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'data not found'
                    })
                }
            }
        })
    }
}
