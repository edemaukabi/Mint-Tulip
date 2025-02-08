const Task = require("../models/Task")

const getTasks = async (req, res) => {
    // res.json({tasks: [
    //     {taskName: "Sweep the room", id: 1, description: "Sweep the room first"},
    //     {taskName: "Sweep the room", id: 2, description: "Sweep the room first"},
    //     {taskName: "Sweep the room", id: 3, description: "Sweep the room first"},
    // ]})
    try{
        const tasks = await Task.find()
        res.send(tasks)
    }catch(err){
        res.send({err: "There was an error"})
    }
}

const getTask = async (req, res) => {
    res.json({task:
        {taskName: "Sweep the room", id: 1, description: "Sweep the room first"},
    })
}

module.exports = {getTasks, getTask}