const Task = require("../models/Task")

const getTasks = async (req, res) => {
    try{
        const tasks = await Task.find()
        res.send(tasks)
    }catch(err){
        res.send({err: "There was an error"})
    }
}

const createTask = async (req, res) => {
    const { title, description, completed } = req.body
    try{
        const newTask = new Task({ title, description, completed})
        await newTask.save()
        res.status(201).json(newTask)
    }catch(err){
        res.status(400).json({message: err.message})
    }
}

const getTask = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        if (!task){
            return res.status(404).json({message: "Task is not found"})
        }
        res.status(200).json(task)
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

const updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!task){
            return res.status(404).json({message: "Task is not found"})
        }
        res.status(200).json(task)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

const editTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!task){
            return res.status(404).json({message: "Task is not found"})
        }
        res.status(200).json(task)
    } catch(err){
        res.status(400).json({message: err.message})
    }
}

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task){
            return res.status(404).json({message: "Task is not found"})
        }
        res.status(200).json({message: `Task ${task.title} deleted successfully`})
    } catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {getTasks, getTask, createTask, updateTask, editTask, deleteTask}