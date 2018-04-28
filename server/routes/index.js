const express = require('express')
const router = express.Router()

router.use('/', require('/notes'))

module.exports = router
