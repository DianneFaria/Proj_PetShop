import "reflect-metadata";
import { DataSource } from "typeorm";
import Cliente from "../models/Cliente";
import Pet from "../models/Pet";
import Produto from "../models/Produto";
import Servico from "../models/Servico";
import Compra from "../models/Compra";
import { CreateClientes1714924125342 } from './migrations/1714924125342-CreateClientes';
import { CreatePets1714929325649 } from './migrations/1714929325649-CreatePets';
import { CreateProdutos1714929354075 } from './migrations/1714929354075-CreateProdutos';
import { CreateServicos1714929371626 } from './migrations/1714929371626-CreateServicos';
import { CreateCompras1714943017214 } from './migrations/1714943017214-CreateCompras'


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "INSIRA A SENHA DE SEU BANCO AQUI",
    database: "petshop",
    synchronize: true,
    logging: false,
    entities: [Cliente, Pet, Produto, Servico, Compra],
    migrations: [CreateClientes1714924125342,
                CreatePets1714929325649,
                CreateProdutos1714929354075,
                CreateServicos1714929371626,
                CreateCompras1714943017214
    ],
    subscribers: [],
})
