'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = express()

api.use(express.static(__dirname + '/public'))

api.listen(3000, (err) => {
  if (err) {
    throw err
  }
  console.log('API corriendo')
})

api.use(bodyParser.urlencoded({ extended: false }))

api.post('/respuesta', (req,res) => {
  const body = req.body.Body
  res.set('Content-Type', 'text/plain')
  res.send(`POST: ${body} recibido!`)
})