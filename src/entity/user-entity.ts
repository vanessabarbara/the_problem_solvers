import * as mongoose from 'mongoose';

export interface IUserModel extends mongoose.Document {
    nome: string;
    idade: number;
    dataNascimento: string;
    endereco: string;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
    email: string;
    senha: string;
}

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    complemento: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    }
});
const UserModel = mongoose.model<IUserModel>('UserModel', Schema, 'users', true);

export { UserModel }