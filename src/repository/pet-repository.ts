import { Service } from 'typedi';
import { IPetModel, PetModel } from '../entity/pet-entity';

@Service()
export class PetRepository {
    public async create(pet: IPetModel): Promise<IPetModel> {
        try {
            return await PetModel.create(pet);
        } catch (error) {
            console.log('pet::repository::create = ' + error);
            return error;
        }
    }

    public async getPet(): Promise<Array<IPetModel>> {
        try {
            const model = await PetModel.find({});
            return model;
        } catch (error) {
            console.log('pet::repository::getPet = ' + error);
            return error;
        }
    }

    public async getPetById(id: string): Promise<IPetModel> {
        try {
            return await PetModel.findById(id);
        } catch (error) {
            console.log('pet::repository::getPetById = ' + error);
            return error;
        }
    }

    public async update(id: string, pet: IPetModel): Promise<IPetModel> {
        try {
            return await PetModel.updateOne({_id: id}, pet);
        } catch (error) {
            console.log('pet::repository::update = ' + error);
            return error;
        }
    }

    public async remove(id: string) {
        try {
            return await PetModel.remove({_id: id});
        } catch (error) {
            console.log('pet::repository::remove = ' + error);
            return error;
        }
    }
}