const Apoiador = require('../models/apoiador')

const formsApo = async (req, res) => {

    const {nome, email, cnpj, mensagem} = req.body;
    const apoiador = {
        nome,
        email,
        cnpj,
        mensagem
    };

    try {

        await Apoiador.create(apoiador)
        res.status(201).json({message: "Formulário enviado com sucesso!"})

    } catch (error) {

        message = "Não foi possível enviar o formulário. Erro: " + error
        res.status(500).json({erro: message});

    }

}

module.exports = {
    formsApo
}
