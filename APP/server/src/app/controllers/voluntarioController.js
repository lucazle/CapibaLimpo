const Voluntario = require('../models/voluntario')
const bcrypt = require ('bcrypt')

const cadastrarVol = async (req, res) => {

    const {nome, cpf, email, telefone, sexo, ocupacao, dt_nasc, senha, confirm_senha, cep, logradouro, num, complemento, bairro, cidade, estado} = req.body;

    if(!nome) {
        return res.status(422).json({ msg: "O nome é obrigatório!" })
    }

    if(!cpf) {
        return res.status(422).json({ msg: "O cpf é obrigatório!" })
    }

    if(!email) {
        return res.status(422).json({ msg: "O email é obrigatório!" })
    }

    if(!telefone) {
        return res.status(422).json({ msg: "O telefone é obrigatório!" })
    }

    if(!sexo) {
        return res.status(422).json({ msg: "O sexo é obrigatório!" })
    }

    if(!ocupacao) {
        return res.status(422).json({ msg: "A ocupação é obrigatória!" })
    }

    if(!dt_nasc) {
        return res.status(422).json({ msg: "A data de nascimento é obrigatória!" })
    }

    if(!senha) {
        return res.status(422).json({ msg: "A senha é obrigatória!" })
    }

    if(senha !== confirm_senha) {
        return res.status(422).json({ msg: "As senhas não conferem!" })
    }
        
    if(!cep) {
        return res.status(422).json({ msg: "O cep é obrigatório!" })
    }

    if(!logradouro) {
        return res.status(422).json({ msg: "O logradouro é obrigatório!" })
    }
        
    if(!num) {
        return res.status(422).json({ msg: "O num é obrigatório!" })
    }
        
    if(!bairro) {
        return res.status(422).json({ msg: "O bairro é obrigatório!" })
    }
        
    if(!cidade) {
        return res.status(422).json({ msg: "A cidade é obrigatória!" })
    }

    if(!estado) {
        return res.status(422).json({ msg: "O estado é obrigatório!" })
    }

//checar se vol existe
    const volExiste = await Voluntario.findOne({ email: email })

    if(volExiste) {
        return res.status(422).json({ msg: "Este e-mail já está cadastrado!" })
    }
    
    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    const voluntario = {nome, cpf, email, telefone, sexo, ocupacao, dt_nasc, senha : senhaHash, cep, logradouro, num, complemento, bairro, cidade, estado};

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

        const voluntario = await Voluntario.findById(id, '-senha')
        
        if(!voluntario){
            res.status(422).json({message: 'O voluntário não foi encontrado!'})
            return
        }

        res.status(200).json(voluntario)

    }catch (error) {

        message = "Não foi possível encontrar o usuário. Erro: " + error
        res.status(500).json({ erro: message });

    }
}

const atualizarVol = async (req, res) => {

    const id = req.params.id

    const {nome, cpf, email, telefone, sexo, ocupacao, dt_nasc, senha, confirm_senha, cep, logradouro, num, complemento, bairro, cidade, estado} = req.body;

    const volExiste = await Voluntario.findOne({ email: email })

    if(volExiste) {
        return res.status(422).json({ msg: "Este e-mail já está cadastrado!" })
    }

    if(senha !== confirm_senha) {
        return res.status(422).json({ msg: "As senhas não conferem!" })
    }

    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    const voluntario = {
        nome, 
        cpf, 
        email, 
        telefone,
        sexo, 
        ocupacao, 
        dt_nasc, 
        senha : senhaHash, 
        cep, 
        logradouro, 
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

        res.status(200).json({message: 'Atualização efetuada com sucesso!'})

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