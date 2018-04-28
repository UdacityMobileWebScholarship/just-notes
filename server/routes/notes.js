const express = require("express")
const router = express.Router()
const notesController = require('../controllers/notes')

//crud operations
router.post('/notes', notesController.create)
router.delete('/notes/:id', notesController.delete)
router.update('/notes/:id', notesController.update)
router.get('/notes/:id', notesController.get)
router.get('/notes', notesController.index)
//TODO getting all notes

module.exports = router
