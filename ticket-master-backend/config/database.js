const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/ticket_master', { useNewUrlParser: true })
    .then(() => {
        console.log('connected to db')
    })
    .catch(() => {
        console.log('Error connecting db')
    })

module.exports = {
    mongoose
}