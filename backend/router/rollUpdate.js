const express = require('express')
const routerRollUpdate = express.Router()

routerRollUpdate.post('/add', (req, res) => {
    res.send("<h1>POSTING A ROLL</h1>")
    res.status(500).send("Hi")
})

routerRollUpdate.get('/get', (req, res) => {
    res.send("GETTING A ROLL")
})

routerRollUpdate.delete('/delete', (req, res) => {
    res.send("DELETING A ROLL")
})

module.exports = routerRollUpdate;
