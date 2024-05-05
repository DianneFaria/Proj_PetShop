import { Router } from 'express';

import ClienteController from './controllers/ClienteController';
import PetController from './controllers/PetController';
import ProdutoController from './controllers/ProdutoController';
import ServicoController from './controllers/ServicoController';
import CompraController from './controllers/CompraController';

const router = Router();

router.post("/clientes", ClienteController.create);
router.post("/pets", PetController.create);
router.post("/produtos", ProdutoController.create);
router.post("/servicos", ServicoController.create);
router.post("/compras", CompraController.create);

export { router };