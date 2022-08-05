const mongoose = require('mongoose');

const Voluntario = mongoose.model('Voluntario', {
    nome: {type: String, required: true, maxLength: 255},
    cpf: {type: String, required: true, maxLength: 14},
    email: {type: String, required: true, maxLength: 45},
    telefone: {type: String, required: true, maxLength: 11},
    sexo: {type: String, required: true},
    ocupacao: {type: String, required: true},
    dt_nasc: {type: String, required: true},
    senha: {type: String, required: true, minLength: 8},
    cep: {type: Number, maxLength: 8},
    logradouro: {type: String, required: true, maxLength: 70},
    num: {type: String, required: true, maxLength: 4},
    complemento: {type: String, maxLength: 60},
    bairro: {type: String, required: true, maxLength: 100},
    cidade: {type: String, required: true, maxLength: 40},
    estado: {type: String, required: true},
    dt_coleta: {type: Date},
    pontos: {type: String, maxLength: 1000}
});

module.exports = Voluntario;