import { Container, Service } from 'typedi';
import { NextFunction, Request, Response } from 'express';
import { UserLogic } from '../logic/user-logic';

@Service()
export class UserController {
    private logic: UserLogic;

    constructor() {
        this.logic = Container.get(UserLogic);
    }

    public async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            const user = await this.logic.createUser(data);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    public async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.logic.getUser();
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    public async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await this.logic.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    public async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const { id } = req.params;
            const user = await this.logic.updateUser(id, data);
            res.status(200).json(user);
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