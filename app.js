require("dotenv").config()
const express = require("express")
const connectDB = require("./database")
const tasksRoutes = require("./routes/taskRoutes")


const app = express()
connectDB()

const PORT = process.env.PORT || 5000
const Domain = `http://localhost`

app.get("/", (req, res) => {
    res.send("Welcome to task manager")
})

app.use("/api/tasks", tasksRoutes)

app.listen(PORT, console.log(`Server running on port ${Domain}:${PORT}`))