const express = require("express")
const router = express.Router()
const notesController = require('../controllers/notes')

//crud operations
router.get('/create', notesController.create)
router.get('/delete', notesController.delete)
router.get('/update', notesController.update)
router.get('/insert', notesController.insert)

module.exports = router
