// import express npm package
const express = require('express')

// initialize an instance of express
const app = express()

// create a home route
app.get('/', (req, res) => {
    res.send("Hello, World! 🎉")
})

// create a rule for summing two numbers
app.get('/user/:username', (req, res) => {
    console.log(req.params.username)
    res.send("Hello, " + req.params.username + "!")
})

// writing a hanging res bug
app.get('/bug', (req, res) => {
    console.log("Hello! You hit our bug route.")
    res.send("🐛 BUG SOLVED!")
})

app.post('/dino', (req, res) => {
    let obj = {
        'creature': 'trex'
    }
    res.json(obj)
})

app.listen(8000)
