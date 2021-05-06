const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())


// endpoint konversi bilangan dari bilangan biner ke decimal
app.get("/biner", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let biner       = Number(req.body.biner)
  let decimal     = parseInt(biner, 2).toString(10);
  // menampung data tujuan konversi
  let response = {
    biner: biner,
    result: {
      decimal: decimal,
    }
  }
  res.json(response)
})

// endpoint konversi bilangan dari bilangan decimal ke biner
app.get("/decimal", (req, res) => {
  // menampung data yg dikirimkan untuk dikonversi
  let decimal     = Number(req.body.decimal)
  let biner       = parseInt(decimal, 10).toString(2);
  // menampung data tujuan konversi
  let response = {
    decimal: decimal,
    result: {
      biner: biner,
    }
  }
  res.json(response)
})


// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})
