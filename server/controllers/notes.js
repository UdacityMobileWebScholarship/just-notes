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
                return res.status(404).json({
                    error: true,
                    message: 'Error Creating Note!'
                })
            })
    },

    update: (req, res) => {
        let slugId = req.params.id

        Note.update({slug:slugId}, {$set: { title: req.body.title, notes: req.body.notes} })
            .then(note =>{
                return res.status(200).json({
                    error: false,
                    message: 'Note updated',
                    note: note
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error: true,
                    message: 'Error updating Note!'
                })
            })
    },

    delete: (req, res) => {
        let slugId = req.params.id

        Note.update({slug:slugId}, {$set: { deleted: true} })
            .then(note =>{
                return res.status(200).json({
                    error: false,
                    message: 'Note delted',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error: true,
                    message: 'Error deleting Note!'
                })
            })
    },

    index: (req, res) => {
        Note.find({ deleted: false })
            .exec()
            .then(notes => {
                notes = notes || []
                return res.status(200).json({
                    error: false,
                    notes: notes, 
                }) 
            })
            .catch(error => {
                return res.status(404).json({
                    error: true,
                    message: 'Error Fetching Notes!'
                })
            })
    },

    get: (req, res) => {
        let slugId = req.params.id
        Note.find({sulg : slugId})
            .then(notes => {
                notes = notes || []
                return res.status(200).json({
                    error: false,
                    notes: notes, 
                }) 
            })
            .catch(error => {

            })
    }
}

module.exports = notesController
