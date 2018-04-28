const Notes = require('../models/notes')

const notesController = {
    create: (req, res) => {
        // code here
        console.log(`create: ${req.body}`)
        res.send('ok')
    },

    update: (req, res) => {
        console.log(`update: ${req.params}`)
        res.send('ok')
    },

    delete: (req, res) => {
        console.log(`delete: ${req.params}`)
        res.send('ok')
    },

    index: (req, res) => {
       console.log(`index: ${req.body}`)
       res.send('ok')
    },

    get: (req, res) => {
        console.log(`get: ${req.params}`)
        res.send('ok')
    }
}
module.exports = notesController
