import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Compra from "../models/Compra";

class CompraController {
    async create(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const { codigoCompra, nomeCliente, cpfCliente, nomeProdServ, 
            codigoProdServ, valor, quantidade, tipoPet, racaPet, totalCompra } = request.body;
        
        const existCompra = await compraRepository.findOneBy({codigoCompra});

        if(existCompra) {
            return response.status(400).json({error: "Erro: Compra já cadastrada!"});
        }

        const compra = compraRepository.create({
            codigoCompra, nomeCliente, cpfCliente, nomeProdServ, 
            codigoProdServ, valor, quantidade, tipoPet, racaPet, totalCompra
        });

        await compraRepository.save(compra);

        return response.json(compra);
    }

    async index(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const compras = await compraRepository.find();

        return response.json(compras);
    }

    async show(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const { codigoCompra } = request.params;

        const compra = await compraRepository.findOne({ where: { codigoCompra: String(codigoCompra) } }); 

        return response.json(compra);
    }

    async topClientesQuantidade(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const query = `
            SELECT nomeCliente, SUM(quantidade) as quantidade
            FROM compras
            GROUP BY nomeCliente
            ORDER BY quantidade DESC
            LIMIT 10
        `;

        const topClientes = await compraRepository.query(query);
        return response.json(topClientes);
    }

    async produtosServicosMaisConsumidos(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const query = `
            SELECT nomeProdServ, SUM(quantidade) as quantidade
            FROM compras
            GROUP BY nomeProdServ
            ORDER BY quantidade DESC
        `;

        const produtosServicos = await compraRepository.query(query);
        return response.json(produtosServicos);
    }

    async consumoPorTipoERaca(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const query = `
            SELECT tipoPet, racaPet, nomeProdServ, SUM(quantidade) as quantidade
            FROM compras
            GROUP BY tipoPet, racaPet, nomeProdServ
            ORDER BY quantidade DESC
        `;

        const consumo = await compraRepository.query(query);
        return response.json(consumo);
    }

    async topClientesValor(request: Request, response: Response) {
        const compraRepository = AppDataSource.getRepository(Compra);

        const query = `
            SELECT nomeCliente, SUM(totalCompra) as totalCompra
            FROM compras
            GROUP BY nomeCliente
            ORDER BY totalCompra DESC
            LIMIT 5
        `;

        const topClientesValor = await compraRepository.query(query);
        return response.json(topClientesValor);
    }
}

export default new CompraController();
