const express = require("express")
const router = express.Router()
const {checkToken} = require('../auth/token.validation')

const{
    getAllMenu,
    getMenu,
    postMenu,
    putMenu,
    deleteMenu,
    getAllGambar
} = require("../controllers/controller.menu")

router.route('/menu').get(checkToken,getAllMenu).post(checkToken,postMenu)
router.route('/menu/:id').get(checkToken,getMenu).put(checkToken,putMenu).delete(checkToken,deleteMenu)
router.route('/gambar').get(checkToken, getAllGambar)

const{
    getAlluser,
    getuser,
    deleteuser,
    registrasi,
    login
} = require("../controllers/controller.user")

router.route('/user').get(checkToken, getAlluser)
router.route('/user/:id').get(checkToken, getuser).delete(checkToken,deleteuser)
router.route('/user/registrasi').post(registrasi)
router.route('/user/login').post(login)

const{
    getAllTransaksi,
    postTransaksi
} = require('../controllers/controller.transaksi')

router.route('/transaksi').get(getAllTransaksi).post(postTransaksi)

const{
    getAllHistory,
    getHistory,
    postHistory,
    deleteHistory,
    tampilHistory,
    tampilHistoryAdmin
} = require("../controllers/controller.history")

router.route('/history').get(checkToken,getAllHistory).post(checkToken,postHistory)
router.route('/history/:id').get(checkToken,getHistory).delete(checkToken,deleteHistory)
router.route('/tampil').get(tampilHistory)
router.route('/tampil/admin').get(tampilHistoryAdmin)

module.exports = router