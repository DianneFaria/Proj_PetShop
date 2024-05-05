import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import Pet from "../models/Pet";


class PetController {
    async create(request: Request, response: Response) {

        const petRepository = AppDataSource.getRepository(Pet);

        const { cpfDono, nomePet, tipo, raca, genero} = request.body;
        
        const existPet = await petRepository.findOneBy({nomePet});

        if(existPet) {
            return response.status(400).json({error: "Erro: Pet já cadastrado!"});
        }

        const pet = petRepository.create({
            cpfDono, 
            nomePet, 
            tipo, 
            raca, 
            genero
        });

        await petRepository.save(pet);

        return response.json(pet);
    }

    async index(request: Request, response: Response) {
        const petRepository = AppDataSource.getRepository(Pet);

        const pets = await petRepository.find();

        return response.json(pets);
    }

    async show(request: Request, response: Response) {
        const petRepository = AppDataSource.getRepository(Pet);

        const { nomePet } = request.params;

        const pet = await petRepository.findOne({ where: { nomePet: String(nomePet) } }); 

        return response.json(pet);
    }
}

export default new PetController();