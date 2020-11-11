import { Router } from 'express';
import UserController from "../controller/UserController";

const routes = new Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.list)

export default routes;