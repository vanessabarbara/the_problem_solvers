import { Container, Service } from 'typedi';
import { IProdutoServicoModel } from '../entity';
import { ProdutoServicoRepository } from '../repository/produto-servico-repository';

@Service()
export class ProdutoServicoLogic {
    produtoServicoRespository: ProdutoServicoRepository;

    constructor() {
        this.produtoServicoRespository = Container.get(ProdutoServicoRepository);
    }

    public async createProdutoServico(produtoServico: IProdutoServicoModel) {
        return await this.produtoServicoRespository.create(produtoServico);
    }

    public async getProdutoServico() {
        return await this.produtoServicoRespository.getProdutoServico();
    }

    public async getProdutoServicoByTipo(tipo: string) {
        return await this.produtoServicoRespository.getProdutoServicoByTipo(tipo);
    }

    public async getProdutoServicoById(id: string) {
        return await this.produtoServicoRespository.getProdutoServicoById(id);
    }

    public async updateProdutoServico(id: string, produtoServico: IProdutoServicoModel) {
        return await this.produtoServicoRespository.update(id, produtoServico);
    }

    public async remove(id: string) {
        return await this.produtoServicoRespository.remove(id);
    }
}