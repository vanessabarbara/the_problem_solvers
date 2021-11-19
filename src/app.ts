import * as express from 'express';
import * as cors from 'cors';
import PetRouter from './routes/pet-router';
import ProdutoServicoRouter from './routes/produto-servico-router';
import UserRouter from './routes/user-router';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.setRoutes();
        this.app.use(cors());
    }

    private async setRoutes() {
        this.app.use('/petsolver/user', new UserRouter().router);
        this.app.use('/petsolver/pet', new PetRouter().router);
        this.app.use('/petsolver/produtoservico', new ProdutoServicoRouter().router);
    }
}

export default new App().app;
