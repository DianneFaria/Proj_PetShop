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

router.get("/listaCliente", ClienteController.index);
router.get("/listaProduto", ProdutoController.index);
router.get("/listaServico", ServicoController.index);
router.get("/listaPet", PetController.index);

router.put("/editarCliente/:cpf", ClienteController.update);
router.put("/editarProduto/:codigoProduto", ProdutoController.update);
router.put("/editarServico/:codigoServico", ServicoController.update);
router.put("/editarPet/:nomePet", PetController.update);

router.delete("/excluirCliente/:cpf", ClienteController.delete);
router.delete("/excluirProduto/:codigoProduto", ProdutoController.delete);
router.delete("/excluirServico/:codigoServico", ServicoController.delete);
router.delete("/excluirPet/:nomePet", PetController.delete);

export { router };