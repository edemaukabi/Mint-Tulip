require("dotenv").config()
const express = require("express")
const bodyParser = require('body-parser')
const connectDB = require("./database")
const tasksRoutes = require("./routes/taskRoutes")


const app = express()
connectDB()

app.use(bodyParser.json())

app.use("/api/tasks", tasksRoutes)

const PORT = process.env.PORT || 5000
const Domain = `http://localhost`

app.get("/", (req, res) => {
    res.send("<div><h3>Welcome to Task Manager App</h3><p>These are links to the API</p><a href='/api/tasks'>Tasks</a></div>")
})


app.listen(PORT, console.log(`Server running on port ${Domain}:${PORT}`))