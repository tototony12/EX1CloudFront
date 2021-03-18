'use strict'


const express = require('express')
const bodyParser = require('body-parser')
const api = express()

api.use(express.static(__dirname + '/public'))

api.listen(3001, () => {
  console.log('API corriendo')
})