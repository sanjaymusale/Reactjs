const express = require('express')

const app = express()
app.use(express.json())
require('./config/database')
const port = 3000

const { ticketRouter } = require('./app/controllers/ticket_controller')
const { departmentRouter } = require('./app/controllers/department_controller')




app.get('/', (req, res) => {
    res.send('WELCOME TO TICKET MASTER')
})

app.use('/ticket', ticketRouter)
app.use('/department', departmentRouter)

app.listen(port, () => {
    console.log('connected to port 3000')
})