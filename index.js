'use strict'

const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || "0.0.0.0"

app.use(express.static(__dirname + '/public'))
app.use(express.json())

//app.get('/', (req, res) => {
//    res.render('index')
//})


app.listen(PORT, (err) => {
    if (err) {
      throw err
    }
    console.log('Servidor iniciado en el puerto ' + PORT)
  })

/*app.post('/respuesta', urlencodedParser, (req,res) => {
  const body = req.body.Body
  res.render('exito', {data: req.body})
})*/