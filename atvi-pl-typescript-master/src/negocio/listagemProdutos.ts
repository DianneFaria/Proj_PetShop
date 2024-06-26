import cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    
    private produtos: Array<Produto>

    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach(produto => {
            console.log(`Código do produto: ` + produto.codigoProduto);
            console.log(`Nome do produto: ` + produto.nomeProduto);
            console.log(`Descrição do produto: ` + produto.descricaoProduto);
            console.log(`Preço do produto: ` + produto.precoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    
}