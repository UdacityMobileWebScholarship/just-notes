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
        // console.log(`update: ${req.params}`)
        // res.send('ok')
        Note.findOneAndUpdate({slug: req.params.id}, {
            title: req.body.title, 
            notes: req.body.notes, 
            updated_at: Date.now()
        }, {new: true})
        .then(note => {
            if(!note) {
                return res.status(404).json({
                    error: false,
                    message: "Note not found with id " + req.params.id,
                });
            }
            return res.status(200).json({
                error: false,
                notes: note, 
            });
        }).catch(err => {
            return res.status(500).json({
                error: true,
                message: 'Error Fetching Notes!'
            });
        });
    },

    delete: (req, res) => {
        // console.log(`delete: ${req.params}`)
        // res.send('ok')
        Note.findOneAndRemove({slug: req.params.id})
        .then(note => {
            if(!note) {
                return res.status(404).json({
                    error: false,
                    message: "Note not found with id " + req.params.id,
                });            
            }
            return res.status(200).json({
                error: false,
                message: "Note deleted successfully!", 
            });
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).json({
                    error: false,
                    message: "Note not found with id " + req.params.id,
                });                  
            }
            return res.status(500).json({
                error: true,
                message: "Could not delete note with id " + req.params.id,
            });
        });
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
                return res.status(500).json({
                    error: true,
                    message: 'Error Fetching Notes!'
                })
            })
    },

    get: (req, res) => {
        console.log(`get: ${req.params.id}`)
        // res.send('ok')
        Note.findOne({slug: req.params.id})
        .then(note => {
            if(!note) {
                return res.status(404).json({
                    error: false,
                    message: "Note not found with id " + req.params.id,
                });            
            }
            return res.status(200).json({
                error: false,
                notes: note, 
            });
        }).catch(err => {
            return res.status(500).json({
                error: true,
                message: 'Error Fetching Notes!'
            });
        });
    }
}

module.exports = notesController
