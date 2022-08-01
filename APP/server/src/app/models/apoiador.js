const mongoose = require('mongoose');

const Apoiador = mongoose.model('Apoiador', {
    nome: {type: String, required: true, maxLength: 255},
    email: {type: String, required: true, maxLength: 45},
    cnpj: {type: String, required: true, maxLength: 14},
    cep: {type: String, required: true, maxLength: 8},
    mensagem: {type: String, required: true, maxLength: 500}
});

module.exports = Apoiador;