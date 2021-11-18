import { Service } from 'typedi';
import { IProdutoServicoModel, ProdutoServicoModel } from '../entity/produto-servico-entity';

@Service()
export class ProdutoServicoRepository {
    public async create(produtoServico: IProdutoServicoModel): Promise<IProdutoServicoModel> {
        try {
            return await ProdutoServicoModel.create(produtoServico);
        } catch (error) {
            console.log('produtoServico::repository::create = ' + error);
            return error;
        }
    }

    public async getProdutoServico(): Promise<Array<IProdutoServicoModel>> {
        try {
            const model = await ProdutoServicoModel.find({});
            return model;
        } catch (error) {
            console.log('produtoServico::repository::getProdutoServico = ' + error);
            return error;
        }
    }

    public async getProdutoServicoByTipo(tipo: string): Promise<Array<IProdutoServicoModel>> {
        try {
            const model = await ProdutoServicoModel.find({tipo});
            return model;
        } catch (error) {
            console.log('produtoServico::repository::getProdutoServicoByTipo = ' + error);
            return error;
        }
    }

    public async getProdutoServicoById(id: string): Promise<IProdutoServicoModel> {
        try {
            return await ProdutoServicoModel.findById(id);
        } catch (error) {
            console.log('produtoServico::repository::getProdutoServicoById = ' + error);
            return error;
        }
    }

    public async update(id: string, produtoServico: IProdutoServicoModel): Promise<IProdutoServicoModel> {
        try {
            return await ProdutoServicoModel.updateOne({_id: id}, produtoServico);
        } catch (error) {
            console.log('produtoServico::repository::update = ' + error);
            return error;
        }
    }

    public async remove(id: string) {
        try {
            return await ProdutoServicoModel.remove({_id: id});
        } catch (error) {
            console.log('produtoServico::repository::remove = ' + error);
            return error;
        }
    }
}