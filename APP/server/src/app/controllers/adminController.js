const Apoiador = require('../models/apoiador')
const Admin = require('../models/admin')
const Evento = require('../models/evento')
const bcrypt = require('bcrypt')

// login
const cadastroAdmin = async (req, res) => {

    const {nome, email, senha, confirm_senha} = req.body;

    if (!nome) {
        return res.status(422).json({msg: "O nome é obrigatório!"})
    }

    if (!email) {
        return res.status(422).json({msg: "O email é obrigatório!"})
    }

    if (!senha) {
        return res.status(422).json({msg: "A senha é obrigatória!"})
    }

    if (senha !== confirm_senha) {
        return res.status(422).json({msg: "As senhas não conferem!"})
    }

    const AdminExiste = await Admin.findOne({email: email})

    if (AdminExiste) {
        return res.status(422).json({msg: "Este e-mail já está cadastrado!"})
    }

    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    const admin = {
        nome,
        email,
        senha: senhaHash
    };

    try {

        await Admin.create(admin)
        res.status(201).json({message: "Cadastro efetuado com sucesso!"})

    } catch (error) {

        message = "Não foi possível realizar o cadastro. Erro: " + error
        res.status(500).json({erro: message});

    }
}

// exibir dados
const exibirAdmin = async (req, res) => {

    const id = req.params.id

    try {

        const form = await Admin.findById(id, '-senha')

        if (! form) {
            res.status(422).json({message: 'O administrador não foi encontrado!'})
            return
        }

        res.status(200).json(form)

    } catch (error) {

        message = "Não foi possível encontrar o administrador. Erro: " + error
        res.status(500).json({erro: message});

    }
}

// atualizar dados
const atualizarAdmin = async (req, res) => {

    const id = req.params.id

    const {nome, email, senha, confirm_senha} = req.body;

    const adminExiste = await Admin.findOne({email: email})

    if (adminExiste) {
        return res.status(422).json({msg: "Este e-mail já está cadastrado!"})
    }

    if (senha !== confirm_senha) {
        return res.status(422).json({msg: "As senhas não conferem!"})
    }

    const hashPassword = await bcrypt.hash(senha, 12);

    const admin = {
        nome,
        email,
        senha: hashPassword
    };

    try {

        const updatedAdmin = await Admin.findByIdAndUpdate(id, admin, {new: true});

        if (updatedAdmin.matchedCount === 0) {
            res.status(422).json({message: 'O voluntário não foi encontrado!'})
            return
        }

        res.status(200).json({message: 'Atualização efetuada com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }
}

// solicitações
const exibirForm = async (req, res) => {

    const id = req.params.id

    try {

        const form = await Apoiador.find(id)

        if (! form) {
            res.status(422).json({message: 'O formulário não foi encontrado!'})
            return
        }

        res.status(200).json(form)

    } catch (error) {

        message = "Não foi possível encontrar o formulário. Erro: " + error
        res.status(500).json({erro: message});

    }
}

const apoAprovado = async (req, res) => {

    const id = req.params.id

    const {avaliacao} = req.body;
    const avaliar = {
        avaliacao
    };

    try {

        const updatedApoiador = await Apoiador.findOneAndUpdate({
            _id: id
        }, avaliar)

        if (updatedApoiador === 0) {
            res.status(422).json({message: 'O formulário não foi encontrado!'})
            return
        }

        res.status(201).json({message: "Formulário aprovado com sucesso!"})

    } catch (error) {

        message = "Não foi possível aprovar o formulário. Erro: " + error
        res.status(500).json({erro: message});

    }

}

const apoNegado = async (req, res) => {

    const id = req.params.id

    const {avaliacao, justificativa} = req.body;
    const avaliar = {
        avaliacao,
        justificativa
    };

    try {

        const updatedApoiador = await Apoiador.findOneAndUpdate({
            _id: id
        }, avaliar)

        if (updatedApoiador === 0) {
            res.status(422).json({message: 'O formulário não foi encontrado!'})
            return
        }

        res.status(201).json({message: "Formulário negado com sucesso!"})

    } catch (error) {

        message = "Não foi possível aprovar o formulário. Erro: " + error
        res.status(500).json({erro: message});

    }

}

// evento
const cadastroEvento = async (req, res) => {

    const {titulo, data, hora, local} = req.body;
    const evento = {
        titulo,
        data,
        hora,
        local
    };

    try {

        await Evento.create(evento)
        res.status(201).json({message: "Evento cadastrado com sucesso!"})

    } catch (error) {

        message = "Não foi possível enviar o formulário. Erro: " + error
        res.status(500).json({erro: message});

    }
}

const mostrarEventos = async (req, res) => {

    const id = req.params.id

    try {

        const evento = await Evento.find(id)

        if (! evento) {
            res.status(422).json({message: 'O evento não foi encontrado!'})
            return
        }

        res.status(200).json(evento)

    } catch (error) {

        message = "Não foi possível encontrar o evento. Erro: " + error
        res.status(500).json({erro: message});

    }
}

const atualizarEvento = async (req, res) => {

    id = req.params.id

    const {titulo, data, hora, local} = req.body;
    const evento = {
        titulo,
        data,
        hora,
        local
    };

    try {

        const updatedEvento = await Evento.findOneAndUpdate({
            _id: id
        }, evento)

        if (updatedEvento === 0) {
            res.status(422).json({message: 'O evento não foi encontrado!'})
            return
        }

        res.status(201).json({message: "Evento atualizado com sucesso!"})

    } catch (error) {

        message = "Não foi possível aprovar o formulário. Erro: " + error
        res.status(500).json({erro: message});
    }
}

const deletarEvento = async (req, res) => {

    const id = req.params.id

    const evento = await Evento.deleteOne({_id: id})

    if (! evento) {
        res.status(422).json({message: 'O evento não foi encontrado'})
        return
    }

    try {

        res.status(200).json({message: 'Evendo removido com sucesso!'})

    } catch {

        res.status(500).json(
            {message: 'Não foi possível encontrar o evento.'}
        )

    }}

module.exports = {
    cadastroAdmin,
    exibirAdmin,
    atualizarAdmin,
    exibirForm,
    apoAprovado,
    apoNegado,
    cadastroEvento,
    mostrarEventos,
    atualizarEvento,
    deletarEvento
}