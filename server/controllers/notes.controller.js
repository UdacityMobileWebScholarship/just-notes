const express = require("express")
const router = express.Router()
const notesSvc = require('../services/notes.service')

//crud operations
router.get('/create', notesSvc.create)
router.get('/delete', notesSvc.delete)
router.get('/update', notesSvc.update)
router.get('/insert', notesSvc.insert)

module.exports = router
