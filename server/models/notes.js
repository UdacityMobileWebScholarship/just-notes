const mongoose = require('mongoose')
const shortId = require('shortid')

const notesSchema = mongoose.Schema({
    slug:{
        type: String,
        required: [true, "smalid is required"],
        default: shortId.generate
    },
    title: {
        type: String,
        required: [true, "title is required"]
    },
    notes : {
        type: String,
        required: [true, "note is required"]
    },
    created_at: {
        type: Date,
        required: [true, "date is required"],
        default: Date.now
    },
    updated_at: {
        type: Date,
        required: [true, "date is required"],
        default: Date.now
    },
    deleted:{
        type: Boolean,
        required: [true, "boolean required"],
        default: false
    }

})

module.exports = mongoose.model('Note', notesSchema)
