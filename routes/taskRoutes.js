const express = require("express");
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  editTask,
  deleteTask,
} = require("../controllers/taskController");


router.get("/", getTasks);

router.post("/", createTask);

router.get("/:id", getTask);

router.patch("/:id", updateTask);

router.put("/:id", editTask);

router.delete("/:id", deleteTask);


module.exports = router;
