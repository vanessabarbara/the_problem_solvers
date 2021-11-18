import * as mongoose from 'mongoose';

export interface IProdutoServicoModel extends mongoose.Document {
    nome: string;
    descricao: string;
    tipo: string;
    preco: Number;
    qtd: number;
}

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    qtd: {
        type: Number,
        required: true,
    }
});
const ProdutoServicoModel = mongoose.model<IProdutoServicoModel>('ProdutoServicoModel', Schema, 'produtosservicos', true);

export { ProdutoServicoModel }