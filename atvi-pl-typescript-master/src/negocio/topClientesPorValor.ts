import RegistroConsumo from "../negocio/registroConsumo";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class TopClientesPorValor {
    private registroConsumo: RegistroConsumo;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
    }

    public exibirTopClientesPorValor(): void {
        const topClientes = this.listarTopClientesPorValor();
        console.log("\nTop 5 clientes que mais consumiram em valor:");
        topClientes.forEach(([cliente, valorGasto], index) => {
            console.log(`${index + 1}. ${cliente.nome} - Valor gasto: R$${this.calcularValorFormatado(cliente)}`);
        });
        console.log();
    }

    private listarTopClientesPorValor(): [Cliente, number][] {
        const registro = this.registroConsumo;
    
        // Inicializar um mapa para armazenar o valor total de consumo de cada cliente
        const valorPorCliente = new Map<Cliente, number>();
    
        // Iterar sobre todos os clientes e calcular o valor total gasto por cada um
        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = registro.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let valorTotalCliente = 0;
                consumoPorItem.forEach((quantidade, item) => {
                    // Para cada item consumido, somar o preço total ao valor total do cliente
                    valorTotalCliente += this.calcularPrecoTotal(item, quantidade);
                });
                valorPorCliente.set(cliente, valorTotalCliente);
            }
        });
    
        // Ordenar os clientes com base no valor total de consumo
        const topClientes: [Cliente, number][] = Array.from(valorPorCliente.entries()).sort((a, b) => b[1] - a[1]);
    
        // Retornar a lista de clientes e valores gastos
        return topClientes;
    }

    private calcularPrecoTotal(item: Produto | Servico, quantidade: number): number {
        // Verificar se o item é um Produto ou um Serviço e calcular o preço total
        if (item instanceof Produto) {
            return item.precoProduto * quantidade;
        } else if (item instanceof Servico) {
            return item.precoServico * quantidade;
        }
        return 0; // Retorna 0 se o tipo do item não for reconhecido
    }

    private calcularValorFormatado(cliente: Cliente): string {
        const topClientes = this.listarTopClientesPorValor();
        const valorGasto = topClientes.find(entry => entry[0] === cliente)?.[1] || 0;
        return valorGasto.toFixed(2); // Formata o valor para duas casas decimais
    }
}