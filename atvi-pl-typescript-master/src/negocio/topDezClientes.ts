import RegistroConsumo from "../negocio/registroConsumo";
import Cliente from "../modelo/cliente";

export default class TopDezClientes {
    private registroConsumo: RegistroConsumo;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
    }

    public exibirTopClientes(): void {
        const topClientes = this.listarTopDezClientes();
        console.log("Top 10 clientes que mais consumiram em quantidade:");
        topClientes.forEach((cliente, index) => {
            console.log(`${index + 1}. ${cliente.nome}`);
        });
    }

    private listarTopDezClientes(): Cliente[] {
        const registro = this.registroConsumo;

        // Inicializar um mapa para armazenar a quantidade total de consumo de cada cliente
        const consumoPorCliente = new Map<Cliente, number>();

        // Iterar sobre todos os clientes e calcular a quantidade total de consumo de cada um
        registro.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = registro.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                let consumoTotalCliente = 0;
                consumoPorItem.forEach((quantidade, _) => {
                    consumoTotalCliente += quantidade;
                });
                consumoPorCliente.set(cliente, consumoTotalCliente);
            }
        });

        // Ordenar os clientes com base na quantidade total de consumo
        const topClientes = Array.from(consumoPorCliente.entries()).sort((a, b) => b[1] - a[1]);

        // Retornar os top 10 clientes
        return topClientes.slice(0, 10).map(entry => entry[0]);
    }
}