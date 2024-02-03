//Import dependencies
const express = require("express")
const cors = require("cors")

//Import JSON files
const projects = require("./projects.json")
const about = require("./about.json")

//Create app object
const app = express()

//Middleware
app.use(cors())

//home route "/" for testing
app.get("/", (req, res) => {
    res.send("Hello World")
})

//projects route "/projects" for retrieving projects
app.get("/projects", (req, res) => {
    //send projects via JSON
    res.json(projects)
})

//about route "/about" for retrieving about
app.get("/about", (req, res) => {
    //send about via JSON
    res.json(about)
})

//declare a variable for port number
const PORT = process.env.PORT || 4000

//turn on the server listener
app.listen(PORT, () => console.log(`Listening to the sound of port ${PORT}`))
