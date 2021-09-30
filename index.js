const express = require ('express')
const app =express()
const port = process.env.PORT || 3000
const playerData = require('./manchesterUnited.json')

app.get('/', (req, res) => {
    res.send("Players of manchester United")
})

app.get('/players', (req, res) => {
    res.send(playerData)
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})