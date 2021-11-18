import * as express from 'express';
import Container from 'typedi';
import { ProdutoServicoController } from '../controller/produto-servico-controller';

class ProdutoServicoRouter {
    public router: express.Router;

    constructor() {
        this.router = express.Router();
        const controller = Container.get(ProdutoServicoController);
       
        this.router.get('/', async (req, res, next) => controller.getProdutoServico(req, res, next));
        this.router.get('/tipo', async (req, res, next) => controller.getProdutoServicoByTipo(req, res, next));
        this.router.get('/:id', async (req, res, next) => controller.getProdutoServicoById(req, res, next));
        this.router.post('/', async (req, res, next) => controller.createProdutoServico(req, res, next));
        this.router.put('/:id', async (req, res, next) => controller.updateProdutoServico(req, res, next));
        this.router.delete('/:id', async (req, res, next) => controller.remove(req, res, next));
    }
}

export default ProdutoServicoRouter;
