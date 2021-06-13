const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloController')
//create -> POST -> save()

//read -> GET -> find()

//update -> PATCH -> getById() ou findOne() e save()

//delete -> DELETE -> getById() ou findOne() e remove()

router.post('/', controller.criaTitulo)
router.get('/', controller.mostraTitulos)
router.get('/marvel', controller.mostraTitulosMarvel)
router.get('/guibli', controller.mostraTitulosGhibli)
router.get('/pixar', controller.mostraTitulosPixar)
router.patch('/:id', controller.atualizaTitulo)
router.delete('/:id', controller.deletaTitulo)



module.exports = router