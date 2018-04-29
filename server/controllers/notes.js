const Note = require('../models/notes')

const notesController = {
    create: (req, res) => {
        const note = new Note({
            title: req.body.title,
            notes: req.body.notes
        })

        note.save()
            .then(note => {
                return res.status(200).json({
                    error: false,
                    message: 'Note created',
                    note: note
                })
            })
            .catch(error => {
                return res.status(500).json({
                    error: true,
                    message: 'Error Creating Note!'
                })
            })
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
        Note.find({ deleted: false })
            .exec()
            .then(notes => {
                return res.status(200).json({
                    error: false,
                    notes: notes
                })
            })
            .catch(error => {
                return res.status(500).json({
                    error: true,
                    message: 'Error Fetching Notes!'
                })
            })
    },

    get: (req, res) => {
        console.log(`get: ${req.params}`)
        res.send('ok')
    }
}

module.exports = notesController
