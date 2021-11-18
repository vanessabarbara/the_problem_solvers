import * as express from 'express';
import Container from 'typedi';
import { UserController } from '../controller/user-controller';

class UserRouter {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        const controller = Container.get(UserController);
       
        this.router.get('/', async (req, res, next) => controller.getUser(req, res, next));
        this.router.get('/:id', async (req, res, next) => controller.getUserById(req, res, next));
        this.router.post('/', async (req, res, next) => controller.createUser(req, res, next));
        this.router.put('/:id', async (req, res, next) => controller.updateUser(req, res, next));
        this.router.delete('/:id', async (req, res, next) => controller.remove(req, res, next));
    }
}

export default UserRouter;
