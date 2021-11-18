import { Service } from 'typedi';
import { IUserModel, UserModel } from '../entity/user-entity';

@Service()
export class UserRepository {
    public async create(user: IUserModel): Promise<IUserModel> {
        try {
            return await UserModel.create(user);
        } catch (error) {
            console.log('user::repository::create = ' + error);
            return error;
        }
    }

    public async getUser(): Promise<Array<IUserModel>> {
        try {
            const model = await UserModel.find({});
            return model;
        } catch (error) {
            console.log('user::repository::getUser = ' + error);
            return error;
        }
    }

    public async getUserById(id: string): Promise<IUserModel> {
        try {
            return await UserModel.findById(id);
        } catch (error) {
            console.log('user::repository::getUserById = ' + error);
            return error;
        }
    }

    public async update(id: string, user: IUserModel): Promise<IUserModel> {
        try {
            return await UserModel.updateOne({_id: id}, user);
        } catch (error) {
            console.log('user::repository::update = ' + error);
            return error;
        }
    }

    public async remove(id: string) {
        try {
            return await UserModel.remove({_id: id});
        } catch (error) {
            console.log('user::repository::remove = ' + error);
            return error;
        }
    }
}