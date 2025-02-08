const express = require("express")
const router = express.Router()
const {getTasks, getTask} = require("../controllers/taskController")

router.get("/", getTasks)

router.get("/:id", getTask)

module.exports = router