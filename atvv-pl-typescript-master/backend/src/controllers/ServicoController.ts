import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Servico from "../models/Servico";


class ServicoController {
    async create(request: Request, response: Response) {

        const servicoRepository = AppDataSource.getRepository(Servico);

        const { codigoServico, nomeServico, descricaoServico, precoServico } = request.body;
        
        const existServico = await servicoRepository.findOneBy({codigoServico});

        if(existServico) {
            return response.status(400).json({error: "Erro: Serviço já cadastrado!"});
        }

        const servico = servicoRepository.create({
            codigoServico, 
            nomeServico, 
            descricaoServico, 
            precoServico
        });

        await servicoRepository.save(servico);

        return response.json(servico);
    }

    async index(request: Request, response: Response) {
        const servicoRepository = AppDataSource.getRepository(Servico);

        const servicos = await servicoRepository.find();

        return response.json(servicos);
    }

    async show(request: Request, response: Response) {
        const servicoRepository = AppDataSource.getRepository(Servico);

        const { codigoServico } = request.params;

        const servico = await servicoRepository.findOne({ where: { codigoServico: String(codigoServico) } }); 

        return response.json(servico);
    }
}

export default new ServicoController();