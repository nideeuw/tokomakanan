const db = require('../db');

module.exports ={
    getAllTransaksi : (req,res) =>{
        db.query('SELECT * from transaksi', (err, result)=>{
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

    postTransaksi: (req, res)=>{
        const datanew ={
            id_user : req.body.id_user,
            tanggal : req.body.tanggal
        }
        db.query(`INSERT INTO transaksi set ?`,datanew, (err, result)=>{
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
}

