const {cadastrarVol, exibirVol, atualizarVol, deletarVol} = require('../app/controllers/voluntarioController')

const express = require('express');
const routes = express.Router()

routes.get('/teste', (req, res) => {
    return res.json({message: 'Servidor Online'})
})

routes.post('/cadastro', cadastrarVol)

routes.get('/perfil/:id', exibirVol)

routes.put('/perfil/:id', atualizarVol)

routes.delete('/perfil/:id', deletarVol)

module.exports={routes}



const voluntarioController = require ('../app/controllers/voluntarioController');

/*
module.exports = (app) => {
    app.post('/cadastro', voluntarioController.post);
    app.put('/useratualizacao/:id', voluntarioController.put);
    app.delete('/user/userdeletar/:id', voluntarioController.delete);
    app.get('/voluntarios', voluntarioController.get);
    app.get('/voluntario/:id', voluntarioController.getById);
}
*/