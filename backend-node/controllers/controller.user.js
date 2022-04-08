const db=require("../db")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secret = '#$*&%^&@#($(@'

function hasPassword(password){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports ={
    getAlluser : (req,res) =>{
        db.query('SELECT * from user', (err, result)=>{
            if(err){
                res.status(500).json({
                    message: "Internal server error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'All user',
                        data: result
                    })
                }else{
                    res.status(404).json({
                        message: 'no Found s'
                    })
                }
            }
        })
    },

    getuser: (req, res)=>{
        const id = req.params.id
        db.query(`SELECT * from user where id_user=${id}`, (err, result)=>{
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

    // putuser: (req, res)=>{
    //     const id = req.params.id
    //     const {username, password, role} = req.body

    //     let pas = password.hasPassword(password)
    
    //     let sql = `UPDATE user SET username = '${username}', password = '${pas}', role = '${role}' WHERE id_user = ${id}`
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
    //                     username,
    //                     password,
    //                     role
    //                 }
    //             })
    //         }
    //     })
    // },

    deleteuser: (req,res)=>{
        const id = req.params.id
        db.query(`DELETE FROM user where id_user = ${id}`, (err, result)=>{
            if(err){
                res.status(500).json({
                    message: 'Internal server error'
                })
            }else{
                res.json({
                    message: 'berhasil menghapus user'
                })
            }
        })
    },

     registrasi: (req, res)=>{
        const{
            username,
            password,
            role
        } = req.body
        if(!username, !role || !password) res.status(402).json({message: 'username, role, password, harus diisi'})
        db.query(`INSERT INTO user set ?`,{username, password:hasPassword(password), role}, (err, result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "internal error"
                })
            }else{
                res.status(201).json({
                    message: 'Data baru ditambahkan',
                    data: {result
                    }
                })
            }
        })
    },

    login:(req,res)=>{
        const{
            username,
            password
        }=req.body
        if(!username || !password) res.status(402).json({message:"username, Password harus diisi"})

        return db.query('select * from user where username = ?', username, (err,result)=>{
            if(err) return res.status(500).json({err})
            
            const user = result[0]
            
            if(typeof user === 'undefined') return res.status(401).json({message:'user tidak ditemukan'})
            if(!bcrypt.compareSync(password, user.password)) return res.status(401).json({message:'username atau password tidak sesuai'})

            const token = jwt.sign({data:user}, secret)
            return res.json({message: 'login berhasil silahkan menggunakan token dibawah ini untuk mengakses', token})
        })
    }
}
