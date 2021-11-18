import { Container, Service } from 'typedi';
import { NextFunction, Request, Response } from 'express';
import { ProdutoServicoLogic } from '../logic/produto-servico-logic';

@Service()
export class ProdutoServicoController {
    private logic: ProdutoServicoLogic;

    constructor() {
        this.logic = Container.get(ProdutoServicoLogic);
    }

    public async createProdutoServico(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            const produtoServico = await this.logic.createProdutoServico(data);
            res.status(200).json(produtoServico);
        } catch (error) {
            next(error);
        }
    }

    public async getProdutoServico(req: Request, res: Response, next: NextFunction) {
        try {
            const produtoServico = await this.logic.getProdutoServico();
            res.status(200).json(produtoServico);
        } catch (error) {
            next(error);
        }
    }

    public async getProdutoServicoByTipo(req: Request, res: Response, next: NextFunction) {
        try {
            const tipo = req.query.tipo;
            const produtoServico = await this.logic.getProdutoServicoByTipo(tipo);
            res.status(200).json(produtoServico);
        } catch (error) {
            next(error);
        }
    }

    public async getProdutoServicoById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const produtoServico = await this.logic.getProdutoServicoById(id);
            res.status(200).json(produtoServico);
        } catch (error) {
            next(error);
        }
    }

    public async updateProdutoServico(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const { id } = req.params;
            const produtoServico = await this.logic.updateProdutoServico(id, data);
            res.status(200).json(produtoServico);
        } catch (error) {
            next(error);
        }
    }

    public async remove(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const response = await this.logic.remove(id);
            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }
}