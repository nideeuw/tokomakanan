const req = require('express/lib/request')
const {verify} = require('jsonwebtoken')
const secret = '#$*&%^&@#($(@'

module.exports={
    checkToken:(req,res,next)=>{
        let token = req.get("authorization")

        if(token){
            let wow = token.slice(7)
            verify(wow, secret, (err, decoded)=>{
                if(err){
                    res.json({
                        succes:0,
                        message:"Login First",
                        err
                    })
                }else{
                    let user = decoded.result
                    next()
                }
            })
        }else{
            res.json({
                succes:0,
                message:"Access Denied :  unauthorization user"
            })
        }
    }
}