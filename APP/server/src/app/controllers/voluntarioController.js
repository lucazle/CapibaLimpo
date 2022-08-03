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

const exibirVol = async (req, res) => {

    const id = req.params.id

    try {

        const voluntario = await Voluntario.findOne({_id:id})
        
        if(!voluntario){
            res.status(422).json({message: 'O voluntário não foi encontrado!'})
            return
        }

        res.status(200).json(voluntario)

    }catch (error) {

        message = "Não foi possível encontrar os usuários. Erro: " + error
        res.status(500).json({ erro: message });

    }
}

const atualizarVol = async (req, res) => {

    const id = req.params.id

    const {nome, cpf, email, telefone, ocupacao, dt_nasc, senha, cep, endereco, num, complemento, bairro, cidade, estado} = req.body;
    const voluntario = {
        nome, 
        cpf, 
        email, 
        telefone, 
        ocupacao, 
        dt_nasc, 
        senha, 
        cep, 
        endereco, 
        num, 
        complemento, 
        bairro, 
        cidade, 
        estado
    };

    try {
        
        const updatedVoluntario = await Voluntario.updateOne({_id:id}, voluntario)

        if(updatedVoluntario.matchedCount === 0) {
            res.status(422).json({message: 'O voluntário não foi encontrado!'})
            return
        }

        res.status(200).json(voluntario)

    }catch (error){
        res.status(500).json({error: error})
    }
}

const deletarVol = async (req, res) => {

    const id = req.params.id

    const voluntario = await Voluntario.deleteOne({_id:id})

        if(!voluntario){
            res.status(422).json({message: 'O voluntário não foi encontrado'})
            return
        }
    
    try{

        await Voluntario.deleteOne({_id:id})

        res.status(200).json({message: 'Voluntário removido com sucesso!'})

    } catch{

        res.status(500).json({message: 'Não foi possível encontrar o voluntário.'})

    }

}

module.exports = {cadastrarVol, exibirVol, atualizarVol, deletarVol}