import * as express from 'express';
import Container from 'typedi';
import { PetController } from '../controller/pet-controller';

class PetRouter {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        const controller = Container.get(PetController);
       
        this.router.get('/', async (req, res, next) => controller.getPet(req, res, next));
        this.router.get('/:id', async (req, res, next) => controller.getPetById(req, res, next));
        this.router.post('/', async (req, res, next) => controller.createPet(req, res, next));
        this.router.put('/:id', async (req, res, next) => controller.updatePet(req, res, next));
        this.router.delete('/:id', async (req, res, next) => controller.remove(req, res, next));
    }
}

export default PetRouter;
