import { Container, Service } from 'typedi';
import { NextFunction, Request, Response } from 'express';
import { PetLogic } from '../logic/pet-logic';

@Service()
export class PetController {
    private logic: PetLogic;

    constructor() {
        this.logic = Container.get(PetLogic);
    }

    public async createPet(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body
            const pet = await this.logic.createPet(data);
            res.status(200).json(pet);
        } catch (error) {
            next(error);
        }
    }

    public async getPet(req: Request, res: Response, next: NextFunction) {
        try {
            const pet = await this.logic.getPet();
            res.status(200).json(pet);
        } catch (error) {
            next(error);
        }
    }

    public async getPetById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const pet = await this.logic.getPetById(id);
            res.status(200).json(pet);
        } catch (error) {
            next(error);
        }
    }

    public async updatePet(req: Request, res: Response, next: NextFunction) {
        try {
            const data = req.body;
            const { id } = req.params;
            const pet = await this.logic.updatePet(id, data);
            res.status(200).json(pet);
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