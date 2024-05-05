import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Compra from "../models/Compra";


class CompraController {
    async create(request: Request, response: Response) {

        const compraRepository = AppDataSource.getRepository(Compra);

        const { codigoCompra, cpfCliente, codigoProdServ, quantidade } = request.body;
        
        const existCompra = await compraRepository.findOneBy({codigoCompra});

        if(existCompra) {
            return response.status(400).json({error: "Erro: Compra já cadastrada!"});
        }

        const compra = compraRepository.create({
            codigoCompra,
            cpfCliente, 
            codigoProdServ, 
            quantidade
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
}

export default new CompraController();