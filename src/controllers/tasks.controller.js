import { Task } from "../models/Task.js";

export const createTask = async (req, res) => {
    const { name, done, projectid } = req.body;
    try {
        const newTask = await Task.create({
            name,
            done,
            projectid
        })
        res.json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        if(!tasks) return res.status(404).json({ message: "No tasks found" });
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id }
        })
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        //const { name, done, projectid } = req.body;
        const task = await Task.findOne({
            where: { id }
        })
        task.set(req.body);
        await task.save();
        /*
        await task.update({
            name,
            done,
            projectid
        })
        */
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id }
        })
        await task.destroy();
        res.json(task);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
