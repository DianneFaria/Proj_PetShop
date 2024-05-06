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

    async update(request: Request, response: Response) {
        const produtoRepository = AppDataSource.getRepository(Produto);
    
        const { codigoProduto: codigoProdutoParam } = request.params;
    
        try {
            const produto = await produtoRepository.findOne({ where: { codigoProduto: String(codigoProdutoParam) } });
            if (!produto) {
                return response.status(404).json({ error: "Produto não encontrado." });
            }
    
            const { codigoProduto, nomeProduto, descricaoProduto, precoProduto } = request.body;
    
            produto.codigoProduto = codigoProduto || produto.codigoProduto;
            produto.nomeProduto = nomeProduto || produto.nomeProduto;
            produto.descricaoProduto = descricaoProduto || produto.descricaoProduto;
            produto.precoProduto = precoProduto || produto.precoProduto;
    
            await produtoRepository.save(produto);
    
            return response.json(produto);
        } catch (error) {
            console.error("Erro ao atualizar produto:", error);
            return response.status(500).json({ error: "Erro interno do servidor ao atualizar produto." });
        }
    }

    async delete(request: Request, response: Response) {
        const produtoRepository = AppDataSource.getRepository(Produto);
        const { codigoProduto } = request.params;

        try {
            const produto = await produtoRepository.findOne({ where: { codigoProduto: String(codigoProduto) } });
            if (!produto) {
                return response.status(404).json({ error: "Produto não encontrado." });
            }

            await produtoRepository.remove(produto);

            return response.json({ message: "Produto excluído com sucesso." });
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
            return response.status(500).json({ error: "Erro interno do servidor ao excluir produto." });
        }
    }
}

export default new ProdutoController();