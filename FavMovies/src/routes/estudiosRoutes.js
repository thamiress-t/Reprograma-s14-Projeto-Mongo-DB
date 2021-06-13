const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioController')
//create -> POST -> save()

//read -> GET -> find()

//update -> PATCH -> getById() ou findOne() e save()

//delete -> DELETE -> getById() ou findOne() e remove()

router.post('/', controller.criaEstudio)
router.get('/', controller.mostraEstudios)
router.patch('/:id', controller.atualizaEstudio)
router.delete('/:id',controller.deletaEstudio)

module.exports = router

