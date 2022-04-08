const express = require("express");
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const db= require("./db")
db.connect(err => {
    if(err)console.log(err.message)
    else console.log("Koneksi berhasil")
})

app.get("/",(req,res)=>{
    res.send({
        message: "berhasil",
    })
})

app.use("/toko", require("./routers/router"))

const port = 8000
app.listen(port, () => console.log(`App running ${port}`))
