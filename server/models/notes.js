const mongoDB = require('../config/mongoDB')

const note = mongoDB.Schema({
    slug:{
        type: String,
        required: [true, "smalid is required"]
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
        required: [true, "date is required"]
    },
    updated_at: {
        type: Date,
        required: [true, "date is required"]
    },
    deleted:{
        type: Boolean,
        required: [true, "boolean required"]
    }

})


module.exports = mongoDB.model('NotesSchema', note)