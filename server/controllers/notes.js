const Note = require('../models/notes');

const notesController = {
    create: (req, res) => {
        const note = new Note({
            title: req.body.title,
            notes: req.body.notes
        });

        note.save()
            .then(note => {
                return res.status(200).json({
                    error: false,
                    message: 'Note created',
                    note: {
                        _id: note._id,
                        title: note.title,
                        notes: note.notes
                    }
                });
            })
            .catch(error => {
                return res.status(500).json({
                    error: true,
                    message: 'Error Creating A Note!'
                });
            });

        console.log(`create: ${req.body}`);
    },

    update: (req, res) => {
        console.log(`update: ${req.params}`);
        res.send('ok');
    },

    delete: (req, res) => {
        console.log(`delete: ${req.params}`);
        res.send('ok');
    },

    index: (req, res) => {
        Note.find()
            .exec()
            .then(notes => {
                return res.status(200).json({
                    error: false,
                    notes: notes
                });
            })
            .catch(error => {
                return res.status(500).json({
                    error: true,
                    message: 'Error Fetching Notes!'
                });
            });
        console.log(`index: ${req.body}`);
    },

    get: (req, res) => {
        console.log(`get: ${req.params}`);
        res.send('ok');
    }
}

module.exports = notesController;
