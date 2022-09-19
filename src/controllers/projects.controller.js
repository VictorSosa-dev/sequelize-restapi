import { Project } from '../models/Project.js';
import { Task } from '../models/Task.js';

export const getProjects = async (req, res) => {

    try {
        //throw new Error('Error en el servidor');
        const projects = await Project.findAll();
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    //res.send('getting Projects')
}

export const getProject = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findOne({
            where: {
                id
            }
        });
        if (!project) return res.status(404).json({ message: 'No hay proyectos' });
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createProject = async (req, res) => {
    const { name, priority, description } = req.body;
    //console.log(req.body);
    try {
        const newProject = await Project.create({
            name,
            priority,
            description
        })

        //console.log(newProject);
        res.json(newProject);
        //res.send('creating Projects')
    } catch {
        return res.status(500).json({ message: error.message });
    }

}

export const updateProject = async (req, res) => {
    const { id } = req.params;
    const { name, priority, description } = req.body;
    try {
        const project = await Project.findOne({
            where: { id }
        });
        project.name = name;
        project.priority = priority;
        project.description = description;
        await project.save();
        res.json(project);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const deleteProject = async (req, res) => {
    /*  await Project.destroy({
         where: { id: req.params.id 
     }})
     res.json({ message: 'Project deleted' }); */

    try {
        const { id } = req.params;
        await Project.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const getProjectTasks = async (req, res) => {
    try {
        const { id } = req.params;
        const tasks = await Task.findAll({
            where: { projectId: id }
        });
        if (!tasks) return res.status(404).json({ message: 'No hay proyectos' });
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
