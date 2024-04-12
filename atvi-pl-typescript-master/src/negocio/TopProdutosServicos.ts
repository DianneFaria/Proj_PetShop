import RegistroConsumo from "../negocio/registroConsumo";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class TopProdutosServicos {
    private registroConsumo: RegistroConsumo;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
    }

    public exibirTopProdutosServicos(): void {
        const topProdutosServicos = this.listarTopProdutosServicos();
        console.log("\nProdutos ou serviços mais consumidos:");
        topProdutosServicos.forEach((item, index) => {
            if (item[0] instanceof Produto) {
                console.log(`${index + 1}. Produto: ${item[0].nomeProduto} - Quantidade Consumida: ${item[1]}`);
            } else if (item[0] instanceof Servico) {
                console.log(`${index + 1}. Serviço: ${item[0].nomeServico} - Quantidade Consumida: ${item[1]}`);
            }
        console.log()
        });        
    }

    public listarTopProdutosServicos(): [Produto | Servico, number][] {
        const registro = this.registroConsumo;

        // Inicializar um mapa para armazenar a quantidade total de consumo de cada produto ou serviço
        const consumoPorItem = new Map<Produto | Servico, number>();

        // Iterar sobre todos os registros de consumo e calcular a quantidade total de cada produto ou serviço
        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorCliente = registro.listarConsumoPorCliente(cliente);
            if (consumoPorCliente) {
                consumoPorCliente.forEach((quantidade, item) => {
                    consumoPorItem.set(item, (consumoPorItem.get(item) || 0) + quantidade);
                });
            }
        });

        // Ordenar os produtos ou serviços com base na quantidade total de consumo
        const topProdutosServicos = Array.from(consumoPorItem.entries()).sort((a, b) => b[1] - a[1]);

        // Retornar os produtos ou serviços mais consumidos em ordem do mais consumido para o menos consumido
        return topProdutosServicos;
    }
}