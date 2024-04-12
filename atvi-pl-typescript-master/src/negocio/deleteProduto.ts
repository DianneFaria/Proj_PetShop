import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Delete from "./delete";

export default class DeleteProduto extends Delete {
    
    private produtos: Produto[];
    private entrada: Entrada;

    constructor(produtos: Produto[]) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada()
    }
    
    public deletar(): void {

        const codigoProd = this.entrada.receberTexto("Informe o código do produto que deseja excluir: ");

        const produto = this.encontrarProdutoPorCodigo(codigoProd);


        if (produto === -1) {
            console.log("\nProduto não encontrado.\n");
            return;
        }

      
        this.produtos.splice(produto, 1);

        console.log("\nProduto excluído com sucesso!\n");
    }

    private encontrarProdutoPorCodigo(codigo: string): number {
        return this.produtos.findIndex(produto => produto.codigoProduto === codigo);
    }
        
}
    
