// routes.ts
import express from 'express';
import CourseController from './controllers/CourseController';
import FullRegistration from './controllers/FullRegistration';

const routes = express.Router();


const fullRegistration = new FullRegistration()
const courseController = new CourseController();

routes.get('/users', courseController.index);
routes.post('/users', courseController.create);


routes.get('/registration', fullRegistration.getUsersCoursesCount )


export default routes;
