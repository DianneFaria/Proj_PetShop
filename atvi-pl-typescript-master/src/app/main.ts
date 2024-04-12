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
import RegistroConsumo from "../negocio/registroConsumo";
import TopDezClientes from "../negocio/topDezClientes";
import TopProdutosServicos from "../negocio/TopProdutosServicos";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import TopProdutosServicosPorTipoRaca from "../negocio/produtosServicosPorTipo";
import TopClientesPorValor from "../negocio/topClientesPorValor";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

let registroConsumo: RegistroConsumo | undefined;


while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Buscar cliente`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`5 - Listar todos os clientes`);
    console.log(`6 - Cadastrar pet`);
    console.log(`7 - Buscar pet`);
    console.log(`8 - Atualizar pet`);
    console.log(`9 - Deletar pet`);
    console.log(`10 - Cadastrar produto`);
    console.log(`11 - Buscar produto`);
    console.log(`12 - Atualizar produto`);
    console.log(`13 - Deletar produto`);
    console.log(`14 - Cadastrar serviço`);
    console.log(`15 - Buscar serviço`);
    console.log(`16 - Atualizar serviço`);
    console.log(`17 - Deletar serviço`);
    console.log(`18 - Registrar consumo`);
    console.log(`19 - Listar top 10 clientes em quantidade de consumo`);
    console.log(`20 - Produtos e serviços mais consumidos `)
    console.log(`21 - Listar produtos e serviços por tipo e raça `)
    console.log(`22 - Listar top 5 clientes em valor`)
    console.log(`23 - Listar todos os produtos `)
    console.log(`24 - Listar todos os servicos `)
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
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 6:
            let cadastroPet = new CadastroPet(empresa.getClientes)
            cadastroPet.cadastrar()
            break; 
        case 7:
            let buscaPet = new BuscaPet(empresa.getClientes)
            buscaPet.buscar()
            break;
        case 8:
            let atualizacaoPet = new AtualizacaoPet(empresa.getClientes)
            atualizacaoPet.atualizar()
            break;
        case 9:
            let deletePet = new DeletePet(empresa.getClientes)
            deletePet.deletar()
            break;
        case 10:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 11:
            let buscaProduto = new BuscarProduto(empresa.getProdutos)
            buscaProduto.buscar()
            break;
        case 12:
            let atualizacaoProduto = new AtualizacaoProduto(empresa.getProdutos)
            atualizacaoProduto.atualizar()
            break;
        case 13:
            let deleteProduto = new DeleteProduto(empresa.getProdutos)
            deleteProduto.deletar()
            break;
        case 14:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 15:
            let buscaServico = new BuscaServico(empresa.getServicos)
            buscaServico.buscar()
            break;
        case 16:
            let atualizacaoServico = new AtualizacaoServico(empresa.getServicos)
            atualizacaoServico.atualizar()
            break;
        case 17:
            let deleteServico = new DeleteServico(empresa.getServicos)
            deleteServico.deletar()
            break;
        case 18:
            if (!registroConsumo) {
                registroConsumo = new RegistroConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            }
            registroConsumo.registrarConsumo();
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}