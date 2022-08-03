const {cadastrarVol, resgatarVol} = require('../app/controllers/voluntarioController')

const express = require('express');
const routes = express.Router()

routes.get('/teste', (req, res) => {
    return res.json({message: 'Servidor Online'})
})

routes.post('/cadastro', cadastrarVol)

module.exports={routes}