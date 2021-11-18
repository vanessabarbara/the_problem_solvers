import * as mongoose from 'mongoose';

export interface IPetModel extends mongoose.Document {
    nome: string;
    dataNascimento: string;
    dataDoacao: string;
    raca: string;
}

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,
        required: true,
    },
    dataDoacao: {
        type: String,
        required: true,
    },
    raca: {
        type: String,
        required: true,
    }
});
const PetModel = mongoose.model<IPetModel>('PetModel', Schema, 'pets', true);

export { PetModel }