const db=require("../db")

module.exports ={
    getAllHistory : (req,res) =>{
        db.query('SELECT * from history', (err, result)=>{
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All history',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'no Found history'
                    })
                }
            }
        })
    },

    getHistory: (req, res)=>{
        const id = req.params.id
        db.query(`SELECT * from history where id_history=${id}`, (err, result)=>{
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

    postHistory: (req, res)=>{
        const datanew ={
            id_transaksi: req.body.id_transaksi,
            id_menu: req.body.id_menu,
        }
        db.query(`INSERT INTO history set ?`,datanew, (err, result)=>{
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

    // putHistory: (req, res)=>{
    //     const id = req.params.id
    //     const {id_user, id_menu, tanggal} = req.body
    //     let sql = `UPDATE history SET id_user = '${id_user}', id_menu = '${id_menu}', tanggal = '${tanggal}' WHERE id_history = ${id}`
    //     db.query(sql, (err, result)=>{
    //         if(err){
    //             console.log(err)
    //             res.status(500).json({
    //                 message: "internal error"
    //             })
    //         }else{
    //             res.status(200).json({
    //                 message: 'Data baru ditambahkan',
    //                 data: {
    //                     id_user,
    //                     id_menu,
    //                     tanggal
    //                 }
    //             })
    //         }
    //     })
    // },

    deleteHistory: (req,res)=>{
        const id = req.params.id
        db.query(`DELETE FROM history where id_history = ${id}`, (err, result)=>{
            if(err){
                res.status(500).json({
                    message: 'Internal server error'
                })
            }else{
                res.json({
                    message: 'berhasil menghapus history'
                })
            }
        })
    },

    tampilHistory: (req,res)=>{
        let sql = `SELECT t.tanggal, m.nama, m.deskripsi, m.harga, m.gambar 
                    from history h join transaksi t on h.id_transaksi=t.id_transaksi
                    join menu m on h.id_menu=m.id_menu`
        db.query(sql, (err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All history',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'no Found'
                    })
                }
            }
        })
    },

    tampilHistoryAdmin: (req,res)=>{
        let sql = `SELECT t.tanggal, m.nama, m.deskripsi, m.harga, m.gambar, u.username 
                    from history h join transaksi t on h.id_transaksi=t.id_transaksi
                    join menu m on h.id_menu=m.id_menu 
                    join user u on t.id_user=u.id_user`
        db.query(sql, (err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All history',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'no Found '
                    })
                }
            }
        })
    }
}
