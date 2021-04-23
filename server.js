const express = require("express")
const server = express()
const jokesReducer = require("./api/jokesReducer.js")

server.use(express.json())
server.use("/jokes", jokesReducer)

module.exports = server