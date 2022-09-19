import express  from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();
//meddlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;