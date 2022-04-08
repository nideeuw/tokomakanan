const mysql = require("mysql")

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "toko_makanan"
})

module.exports = db;