const express = require('express');
const routes = express.Router()

const {cadastrarVol, exibirVol, atualizarVol, deletarVol} = require ('../app/controllers/voluntarioController')
const {authVol} = require ('../app/controllers/authController')
const {formsApo} = require ('../app/controllers/apoiadorController')
const {checkToken} = require ('../middlewares/jwt')


//rotas voluntário
routes.post('/login', authVol)

routes.post('/cadastro', cadastrarVol)

routes.get('/perfil/:id', checkToken, exibirVol)

routes.put('/perfil/:id', atualizarVol)

routes.delete('/perfil/:id', deletarVol)


//rotas apoiador
routes.post('/apoiador', formsApo)

module.exports={routes}


const voluntarioController = require ('../app/controllers/voluntarioController');
