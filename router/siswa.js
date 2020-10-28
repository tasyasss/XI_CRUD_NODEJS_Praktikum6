// router/siswa.js

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const db = require("../config") //import konfigurasi database

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// end-point akses data siswa
app.get("/", (req, res) => {
    // create sql query
    let sql = "select * from siswa"
    
    // run query
    db.query(sql, (error, result) => {
    let response = null
        if (error) {
            response = {
                message: error.message // pesan error
            }
        } else {
            response = {
                count: result.length, // jumlah data
                siswa: result // isi data
            }
        }
        res.json(response) // send response
    })
})