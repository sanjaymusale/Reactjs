const mongoose = require('mongoose')
const validator = require('validator')

const { Schema } = mongoose

const ticketSchema = new Schema({
    //   name
    //   department - Schme.Types.ObjectID
    //   priority 
    //   message 
    //   createdAt 
    name: {
        type: String,
        minlength: 6,
        maxlength: 100,
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department'
    },
    priority: {
        type: String,
        required: true,

    },
    message: {
        type: String,
        required: true,
        minlength: 5

    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = {
    Ticket
}