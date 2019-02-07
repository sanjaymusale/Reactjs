const mongoose = require('mongoose')

const express = require('express')
const router = express.Router()

const { Department } = require('../models/department')

router.get('/', (req, res) => {
    Department.find()
        .then((department) => {
            res.send(department)
        })
        .catch((err) => {
            res.send(err)
        })
})

router.post('/', (req, res) => {
    const body = req.body
    const department = new Department(body)
    department.save()
        .then((data) => {
            res.send({
                notice: "Successfully Data inserted",
                data: data
            })
        })
        .catch((err) => {
            res.send(err)
        })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id
    Department.findOneAndDelete({
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
    Department.findOneAndUpdate({ _id: id }, { $set: body })
        .then((data) => {
            res.send({
                notice: "Successfully Updated",
                data: data
            })
        })
})

module.exports = {
    departmentRouter: router
}