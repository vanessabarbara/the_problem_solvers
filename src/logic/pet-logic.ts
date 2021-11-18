import { Container, Service } from 'typedi';
import { IPetModel } from '../entity';
import { PetRepository } from '../repository/pet-repository';

@Service()
export class PetLogic {
    petRespository: PetRepository;

    constructor() {
        this.petRespository = Container.get(PetRepository);
    }

    public async createPet(pet: IPetModel) {
        return await this.petRespository.create(pet);
    }

    public async getPet() {
        return await this.petRespository.getPet();
    }

    public async getPetById(id: string) {
        return await this.petRespository.getPetById(id);
    }

    public async updatePet(id: string, pet: IPetModel) {
        return await this.petRespository.update(id, pet);
    }

    public async remove(id: string) {
        return await this.petRespository.remove(id);
    }
}