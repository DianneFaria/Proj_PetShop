import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Cliente from "../models/Cliente";

class ClienteController {
    async create(request: Request, response: Response) {

        const clienteRepository = AppDataSource.getRepository(Cliente);

        const { nome, nomeSocial, cpf, dataCpf, rg, dataRg, telefone } = request.body;
        
        const existCliente = await clienteRepository.findOneBy({cpf});

        if(existCliente) {
            return response.status(400).json({error: "Erro: Cliente já cadastrado!"});
        }

        const cliente = clienteRepository.create({
            nome, 
            nomeSocial, 
            cpf, 
            dataCpf, 
            rg, 
            dataRg, 
            telefone
        });

        await clienteRepository.save(cliente);

        return response.json(cliente);
    }

    async index(request: Request, response: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);

        const clientes = await clienteRepository.find();

        return response.json(clientes);
    }

    async show(request: Request, response: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);

        const { cpf } = request.params;

        const cliente = await clienteRepository.findOne({ where: { cpf: String(cpf) } }); 

        return response.json(cliente);
    }
}

export default new ClienteController();