import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const AppRoute = Router();

AppRoute.get('/', AppController.getHomepage)
  .get('/students', StudentsController.getAllStudents)
  .get('/students/:major', StudentsController.getAllStudentsByMajor);

export default AppRoute;
