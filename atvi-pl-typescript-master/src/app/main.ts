import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import DeleteCliente from "../negocio/deleteCliente";
import BuscaCliente from "../negocio/buscaCliente";
import CadastroPet from "../negocio/cadastroPet";
import ListagemProdutos from "../negocio/listagemProdutos";
import AtualizacaoPet from "../negocio/atualizacaoPet";
import BuscaPet from "../negocio/buscaPet";
import DeletePet from "../negocio/deletePet";
import CadastroProduto from "../negocio/cadastroProduto";
import BuscarProduto from "../negocio/buscaProduto";
import AtualizacaoProduto from "../negocio/atualizacaoProduto";
import DeleteProduto from "../negocio/deleteProduto";
import CadastroServico from "../negocio/cadastroServico";
import BuscaServico from "../negocio/buscaServico";
import AtualizacaoServico from "../negocio/atualizacaoServico";
import DeleteServico from "../negocio/deleteServico";
import RegistroConsumo from "../negocio/cadastroConsumo";
import TopDezClientes from "../negocio/topDezClientes";
import TopProdutosServicos from "../negocio/TopProdutosServicos";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import TopProdutosServicosPorTipoRaca from "../negocio/produtosServicosPorTipo";
import TopClientesPorValor from "../negocio/topClientesPorValor";
import ListagemServicos from "../negocio/listagemServicos";
import ListagemPets from "../negocio/listagemPets";
import Pet from "../modelo/pet";
import BuscarCompra from "../negocio/buscaCompra";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinárias`);

let empresa = new Empresa();
let execucao = true;
let registroConsumo: RegistroConsumo | undefined;

// Inicialização do registro de consumo
registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);

// Criação de clientes
let clientes = [
    new Cliente('Dianne Faria', 'Dianne', new CPF('48025878545', new Date(1990, 10, 20)), [new RG('963581472', new Date(1990, 8, 2))], [new Telefone('12', '996612768')]),
    new Cliente('Dayane Brito', 'Dayane', new CPF('47859625814', new Date(2000, 11, 12)), [new RG('78639254', new Date(2005, 8, 20))], [new Telefone('15', '996887458')]),
    new Cliente('Debora Cruz', 'Debora', new CPF('14852636985',new Date(25,11,1978)), [new RG('789512581', new Date(25,11,1978))], [new Telefone('12', '997478569')]),
    new Cliente('Valeria Faria', 'Valeria', new CPF('78945612323',new Date(22,10,1991)), [new RG('756985214', new Date(22,10,1991))], [new Telefone('14', '999635147')]),
    new Cliente('Claudio Roberto', 'Claudio', new CPF('45454545454',new Date(12,11,1995)), [new RG('789358145', new Date(12,11,1995))], [new Telefone('13', '992963789')]),
    new Cliente('Joao Victor Simao', 'Joao', new CPF('74125896325',new Date(11,11,2011)), [new RG('789557711', new Date(11,11,2011))], [new Telefone('18', '996745896')]),
    new Cliente('Pedro Brito', 'Pedro', new CPF('75321489625',new Date(29,11,2005)), [new RG('789589933', new Date(29,11,2005))], [new Telefone('21', '996647852')]),
    new Cliente('Maya Vitoria', 'Maya', new CPF('78932145696',new Date(1,1,2001)), [new RG('124559988', new Date(1,1,2001))], [new Telefone('23', '997965896')]),
    new Cliente('Paula Simao', 'Paula', new CPF('14796325874',new Date(14,2,2020)), [new RG('775599658', new Date(14,2,2020))], [new Telefone('12', '997741258')]),
    new Cliente('Miller Santos', 'Miller', new CPF('75632847152',new Date(15,5,2010)), [new RG('882245963', new Date(15,5,2010))], [new Telefone('22', '996612578')])
];

clientes.forEach(cliente => empresa.getClientes.push(cliente));

// Criação de pets
let pets = [
    new Pet('Rex', 'Golden Retriever', 'Macho', 'Cachorro'),
    new Pet('Luna', 'Labrador', 'Fêmea', 'Cachorro'),
    new Pet('Tom', 'Siamese', 'Macho', 'Gato'),
    new Pet('Bella', 'Persa', 'Fêmea', 'Gato'),
    new Pet('Max', 'Poodle', 'Macho', 'Cachorro'),
    new Pet('Daisy', 'Bulldog', 'Fêmea', 'Cachorro'),
    new Pet('Simba', 'Maine Coon', 'Macho', 'Gato'),
    new Pet('Molly', 'Beagle', 'Fêmea', 'Cachorro'),
    new Pet('Charlie', 'Vira-lata', 'Macho', 'Cachorro'),
    new Pet('Lucy', 'Siamês', 'Fêmea', 'Gato')
];

pets.forEach((pet, index) => empresa.getClientes[index].getPets.push(pet));

// Criação de serviços
let servicos = [
    new Servico("6", "Banho", "Banho com Shampoo", 32),
    new Servico("7", "Tosa", "Tosa Higiênica", 25),
    new Servico("8", "Consulta Veterinária", "Consulta com Veterinário", 50),
    new Servico("9", "Vacinação", "Vacinação Anual", 40),
    new Servico("10", "Hospedagem", "Hospedagem Diária", 60)
];

servicos.forEach(servico => empresa.getServicos.push(servico));

// Criação de produtos
let produtos = [
    new Produto("1", "Ração Premium", "Ração para Cães Adultos", 50),
    new Produto("2", "Coleira Anti-pulgas", "Coleira repelente de pulgas e carrapatos", 20),
    new Produto("3", "Brinquedo de Pelúcia", "Brinquedo de pelúcia para entretenimento", 15),
    new Produto("4", "Shampoo Antialérgico", "Shampoo hipoalergênico para cães", 30),
    new Produto("5", "Caixa de Areia", "Caixa de areia para gatos com filtro", 40)
];

produtos.forEach(produto => empresa.getProdutos.push(produto));

// Registro de consumo
let consumoClientesProdutos = [
    { cliente: clientes[0], produto: produtos[0], quantidade: 1 },
    { cliente: clientes[1], produto: produtos[1], quantidade: 2 },
    { cliente: clientes[2], produto: produtos[2], quantidade: 3 },
    { cliente: clientes[3], produto: produtos[3], quantidade: 4 },
    { cliente: clientes[4], produto: produtos[4], quantidade: 5 }
];

consumoClientesProdutos.forEach(item => registroConsumo!.getConsumos().set(item.cliente, new Map().set(item.produto, item.quantidade)));

let consumoClientesServicos = [
{ cliente: clientes[5], servico: servicos[0], quantidade: 6 },
{ cliente: clientes[6], servico: servicos[1], quantidade: 7 },
{ cliente: clientes[7], servico: servicos[2], quantidade: 8 },
{ cliente: clientes[8], servico: servicos[3], quantidade: 9 },
{ cliente: clientes[9], servico: servicos[4], quantidade: 10 }
];

consumoClientesServicos.forEach(item => registroConsumo!.getConsumos().set(item.cliente, new Map().set(item.servico, item.quantidade)));


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Buscar cliente`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Buscar pet`);
    console.log(`7 - Atualizar pet`);
    console.log(`8 - Deletar pet`);
    console.log(`9 - Cadastrar produto`);
    console.log(`10 - Buscar produto`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Deletar produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`14 - Buscar serviço`);
    console.log(`15 - Atualizar serviço`);
    console.log(`16 - Deletar serviço`);
    console.log(`17 - Registrar compra`);
    console.log(`18 - Buscar compra`);
    console.log(`19 - Listar top 10 clientes em quantidade de consumo`);
    console.log(`20 - Produtos e serviços mais consumidos `);
    console.log(`21 - Listar produtos e serviços por tipo e raça `);
    console.log(`22 - Listar top 5 clientes em valor`);
    console.log(`23 - Listar todos os produtos `);
    console.log(`24 - Listar todos os servicos `);
    console.log(`25 - Listar todos os clientes `);
    console.log(`26 - Listar todos os pets `);
    console.log(`0 - Sair`);  

    let entrada = new Entrada()
    
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let busca = new BuscaCliente(empresa.getClientes)
            busca.buscar()
            break;
        case 3:
            let atualizacaoCliente = new AtualizacaoCliente(empresa.getClientes)
            atualizacaoCliente.atualizar()
            break;
        case 4:
            let deleteCliente = new DeleteCliente(empresa.getClientes)
            deleteCliente.deletar()
            break;
        case 5:
            let cadastroPet = new CadastroPet(empresa.getClientes)
            cadastroPet.cadastrar()
            break; 
        case 6:
            let buscaPet = new BuscaPet(empresa.getClientes)
            buscaPet.buscar()
            break;
        case 7:
            let atualizacaoPet = new AtualizacaoPet(empresa.getClientes)
            atualizacaoPet.atualizar()
            break;
        case 8:
            let deletePet = new DeletePet(empresa.getClientes)
            deletePet.deletar()
            break;
        case 9:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 10:
            let buscaProduto = new BuscarProduto(empresa.getProdutos)
            buscaProduto.buscar()
            break;
        case 11:
            let atualizacaoProduto = new AtualizacaoProduto(empresa.getProdutos)
            atualizacaoProduto.atualizar()
            break;
        case 12:
            let deleteProduto = new DeleteProduto(empresa.getProdutos)
            deleteProduto.deletar()
            break;
        case 13:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 14:
            let buscaServico = new BuscaServico(empresa.getServicos)
            buscaServico.buscar()
            break;
        case 15:
            let atualizacaoServico = new AtualizacaoServico(empresa.getServicos)
            atualizacaoServico.atualizar()
            break;
        case 16:
            let deleteServico = new DeleteServico(empresa.getServicos)
            deleteServico.deletar()
            break;
        case 17:
            if (!registroConsumo) {
                registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            }
            registroConsumo.registrarConsumo();
            break;
        case 18:
            if (!registroConsumo) {
                console.log("Registro de consumo não foi inicializado.");
            } else {
                let buscaCompra = new BuscarCompra(registroConsumo);
                buscaCompra.buscar();
            }
            break;
        case 19:
            if (registroConsumo) {
                let topDezClientes = new TopDezClientes(registroConsumo)
                topDezClientes.exibirTopClientes()
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 20:
            if (registroConsumo) {
                const topProdutosServicos = new TopProdutosServicos(registroConsumo);
                topProdutosServicos.exibirTopProdutosServicos();
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 21:
            if (registroConsumo) {
                let topProdutosServicosPorTipo = new TopProdutosServicosPorTipoRaca(registroConsumo)
                topProdutosServicosPorTipo.listarTopProdutosServicosPorTipoRaca()
            } else {
                console.log("Registro de consumo não foi inicializado.")
            }
            break;
        case 22:
            if (registroConsumo) {
               let topClientesPorValor = new TopClientesPorValor(registroConsumo)
               topClientesPorValor.exibirTopClientesPorValor()
          } else {
              console.log("Registro de consumo não foi inicializado.")
          }
            break;
        case 23:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos)
            listagemProdutos.listar()
            break; 
        case 24:
            let listagemServicos = new ListagemServicos(empresa.getServicos)
            listagemServicos.listar()
            break; 
        case 25:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 26:
            let todosOsPets: Pet[] = [];
            empresa.getClientes.forEach(cliente => {
                todosOsPets = todosOsPets.concat(cliente.getPets);
            });
            let listagemPets = new ListagemPets(todosOsPets);
            listagemPets.listar();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}