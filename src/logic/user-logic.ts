import { Container, Service } from 'typedi';
import { IUserModel } from '../entity';
import { UserRepository } from '../repository/user-repository';

@Service()
export class UserLogic {
    userRespository: UserRepository;

    constructor() {
        this.userRespository = Container.get(UserRepository);
    }

    public async createUser(user: IUserModel) {
        return await this.userRespository.create(user);
    }

    public async getUser() {
        return await this.userRespository.getUser();
    }

    public async getUserById(id: string) {
        return await this.userRespository.getUserById(id);
    }

    public async updateUser(id: string, user: IUserModel) {
        return await this.userRespository.update(id, user);
    }

    public async remove(id: string) {
        return await this.userRespository.remove(id);
    }
}