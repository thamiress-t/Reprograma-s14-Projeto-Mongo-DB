const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const criaTitulo = async(req, res) => {
    const titulo = new Titulo({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        genero:req.body.genero,
        descricao:req.body.descricao,
        estudio:req.body.estudio,
    })

    //regra que nao permite criar um titulo que ja existe
    const TituloJaExiste = await Titulo.findOne({nome: req.body.nome })
    if(TituloJaExiste){
        return res.status(409).json({error: "Titulo já cadastrado!"})
    }

    try {
        const novoTitulo = await titulo.save()
        return res.status(201).json(novoTitulo)
    }catch (err) {
        return res.status(400).json({message: error.message})
    }
}

const mostraTitulos = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    return res.status(200).json(titulos)
}

const mostraTitulosMarvel = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")

    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosGhibli = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

    return res.status(200).json(titulosFiltrado)
}

const mostraTitulosPixar = async (req, res) => {
    const titulos = await Titulo.find().populate('estudio')
    const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Pixar")

    return res.status(200).json(titulosFiltrado)
}
const atualizaTitulo = async(req, res) =>{
    const encontraTitulo = await Titulo.findById(req.params.id).populate('estudio')
    try {
    if(encontraTitulo== null){
        return res.status(404).json({message: 'Titulo não encontrado!'})
    }
    if (req.body.nome != null){
        encontraTitulo.nome = req.body.nome
    }
    if (req.body.genero != null){
        encontraTitulo.genero = req.body.genero
    }
    if (req.body.descricao != null){
        encontraTitulo.descricao = req.body.descricao
    }
    if (req.body.estudio != null){
        encontraTitulo.estudio = req.body.estudio
    }
    //salvando alteracoes
        const tituloAtualizado = await encontraTitulo.save()
        res.status(200).json(tituloAtualizado)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

const deletaTitulo = async (req,res) => {
    const encontraTitulo = await Titulo.findById(req.params.id)
    if(encontraTitulo== null){
        return res.status(404).json({message: 'Titulo não encontrado!'})
    }
    try{
        await encontraTitulo.remove()
        res.status(200).json({message: 'Deletado com sucesso'})

    } catch (err){
        res.status(500).json({message: err.message})
    }
    
}



module.exports = { 
    criaTitulo,
    mostraTitulos,
    mostraTitulosMarvel,
    mostraTitulosGhibli,
    mostraTitulosPixar,
    atualizaTitulo,
    deletaTitulo


}

