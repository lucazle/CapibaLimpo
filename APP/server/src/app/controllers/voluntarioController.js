const Voluntario = require('../models/voluntario')

const cadastrarVol = async (req, res) => {

    const {nome, cpf, email, telefone, ocupacao, dt_nasc, senha, cep, endereco, num, complemento, bairro, cidade, estado} = req.body;
    const voluntario = {nome, cpf, email, telefone, ocupacao, dt_nasc, senha, cep, endereco, num, complemento, bairro, cidade, estado};

    try{
        
        await Voluntario.create(voluntario)
        res.status(201).json({message: "Cadastro efetuado com sucesso!"})

    }catch(error){
       
        message = "Não foi possível realizar o cadastro. Erro: " + error
        res.status(500).json({ erro: message });

    }
}

const resgatarVol = async (req, res) => {

    try {

        const voluntarios = await Voluntario.find()
        res.status(200).json(voluntarios)

    }catch (error) {

        message = "Não foi possível encontrar os usuários. Erro: " + error
        res.status(500).json({ erro: message });

    }
}

module.exports = {cadastrarVol, resgatarVol}