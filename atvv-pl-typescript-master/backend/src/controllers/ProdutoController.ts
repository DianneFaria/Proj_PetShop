import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Produto from "../models/Produto";


class ProdutoController {
    async create(request: Request, response: Response) {

        const produtoRepository = AppDataSource.getRepository(Produto);

        const { codigoProduto, nomeProduto, descricaoProduto, precoProduto } = request.body;
        
        const existProduto = await produtoRepository.findOneBy({codigoProduto});

        if(existProduto) {
            return response.status(400).json({error: "Erro: Produto já cadastrado!"});
        }

        const produto = produtoRepository.create({
            codigoProduto, 
            nomeProduto, 
            descricaoProduto, 
            precoProduto
        });

        await produtoRepository.save(produto);

        return response.json(produto);
    }

    async index(request: Request, response: Response) {
        const produtoRepository = AppDataSource.getRepository(Produto);

        const produtos = await produtoRepository.find();

        return response.json(produtos);
    }

    async show(request: Request, response: Response) {
        const produtoRepository = AppDataSource.getRepository(Produto);

        const { codigoProduto } = request.params;

        const produto = await produtoRepository.findOne({ where: { codigoProduto: String(codigoProduto) } }); 

        return response.json(produto);
    }
}

export default new ProdutoController();