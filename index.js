'use strict'

const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json())

//app.get('/', (req, res) => {
//    res.render('index')
//})

app.listen(3003, (err) => {
    if (err) {
      throw err
    }
    console.log('Servidor iniciado en el puerto 3000')
  })

/*app.post('/respuesta', urlencodedParser, (req,res) => {
  const body = req.body.Body
  res.render('exito', {data: req.body})
})*/