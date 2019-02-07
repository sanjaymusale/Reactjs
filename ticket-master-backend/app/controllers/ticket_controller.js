const express = require('express')

const router = express.Router()

const { Ticket } = require('../models/ticket')

router.get('/', (req, res) => {
    Ticket.find()
        .then((tickets) => {
            res.send(tickets)
        })
        .catch((err) => {
            res.send(err)
        })

})
router.post('/', (req, res) => {
    const body = req.body
    const ticket = new Ticket(body)
    ticket.save()
        .then((ticket) => {
            res.send({
                notice: "Submit was Success",
                data: ticket
            })
        })
        .catch((err) => {
            res.send(err)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Ticket.findOneAndDelete({
        _id: id
    }).then((data) => {
        res.send({
            notice: "Successfully Deleted",
            data: data
        })
    })
        .catch((err) => {
            res.send(err)
        })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    Ticket.findOneAndUpdate({ _id: id }, { $set: body })
        .then((data) => {
            res.send({
                notice: "Successfully Updated",
                data: data
            })
        })
})



module.exports = {
    ticketRouter: router
}