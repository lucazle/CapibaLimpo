const voluntarioRotas = require ('./voluntarioRotas');
const apoiadorRotas = require ('./apoiadorRotas')

module.exports = (app) => {
    voluntarioRotas(app),
    apoiadorRotas(app)
}