'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const api = express()

api.use(express.static(__dirname + '/public'))

api.listen(3001, (err) => {
  if (err) {
    throw err
  }
  console.log('API corriendo')
})

app.use(bodyParser.urlencoded({ extended: false }))

api.post('/respuesta', (req,res) => {
  const body = rew.body.body
  res.set('Content-Type', 'text/plain')
  res.send(`POST: ${body} recibido!`)
})