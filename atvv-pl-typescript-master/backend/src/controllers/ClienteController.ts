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


    async update(request: Request, response: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);

        const { cpf } = request.params;

        try {
            const cliente = await clienteRepository.findOne({ where: { cpf: String(cpf) } });
            if (!cliente) {
                return response.status(404).json({ error: "Cliente não encontrado." });
            }

            const { nome, nomeSocial, dataCpf, rg, dataRg, telefone } = request.body;

            cliente.nome = nome || cliente.nome;
            cliente.nomeSocial = nomeSocial || cliente.nomeSocial;
            cliente.dataCpf = dataCpf || cliente.dataCpf;
            cliente.rg = rg || cliente.rg;
            cliente.dataRg = dataRg || cliente.dataRg;
            cliente.telefone = telefone || cliente.telefone;

            await clienteRepository.save(cliente);

            return response.json(cliente);
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
            return response.status(500).json({ error: "Erro interno do servidor ao atualizar cliente." });
        }
    }


    async delete(request: Request, response: Response) {
        const clienteRepository = AppDataSource.getRepository(Cliente);
        const { cpf } = request.params;

        try {
            const cliente = await clienteRepository.findOne({ where: { cpf: String(cpf) } });
            if (!cliente) {
                return response.status(404).json({ error: "Cliente não encontrado." });
            }

            await clienteRepository.remove(cliente);

            return response.json({ message: "Cliente excluído com sucesso." });
        } catch (error) {
            console.error("Erro ao excluir cliente:", error);
            return response.status(500).json({ error: "Erro interno do servidor ao excluir cliente." });
        }
    }
}

export default new ClienteController();