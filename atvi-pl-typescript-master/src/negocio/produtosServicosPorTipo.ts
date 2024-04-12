import RegistroConsumo from "../negocio/registroConsumo";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class TopProdutosServicosPorTipoRaca {
    private registroConsumo: RegistroConsumo;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
    }

    public listarTopProdutosServicosPorTipoRaca(): void {
        const consumoPorTipoRaca = this.calcularConsumoPorTipoRaca();
        
        // Saída formatada para o usuário
        console.log("\nProdutos ou serviços mais consumidos por tipo e raça de pets:");
        consumoPorTipoRaca.forEach((consumo, tipoRaca) => {
            console.log(`Tipo/Raça: ${tipoRaca}`);
            consumo.forEach((quantidade, item) => {
                console.log(`- ${item instanceof Produto ? "Produto" : "Serviço"}: ${item instanceof Produto ? item.getNomeProduto : item.getNomeServico} - Quantidade Consumida: ${quantidade}`);
                console.log();
            });
        });
    }

    private calcularConsumoPorTipoRaca(): Map<string, Map<Produto | Servico, number>> {
        const consumoPorTipoRaca = new Map<string, Map<Produto | Servico, number>>();

        // Iterar sobre todos os registros de consumo
        this.registroConsumo.listarTodosOsClientes().forEach(cliente => {
            const consumoPorItem = this.registroConsumo.listarConsumoPorCliente(cliente);
            if (consumoPorItem) {
                // Suponha que você tenha acesso ao pet associado a cada cliente
                const petsDoCliente = cliente.getPets;

                // Verifique se o cliente possui pets associados
                if (petsDoCliente.length > 0) {
                    petsDoCliente.forEach(pet => {
                        const tipo = pet.getTipo; 
                        const raca = pet.getRaca; 
                        const tipoRaca = `${tipo}/${raca}`; 

                        // Verificar se já há registro para o tipo e raça do pet
                        if (!consumoPorTipoRaca.has(tipoRaca)) {
                            consumoPorTipoRaca.set(tipoRaca, new Map<Produto | Servico, number>());
                        }

                        // Adicionar o consumo do cliente ao registro correspondente ao tipo e raça do pet
                        const consumoAtual = consumoPorTipoRaca.get(tipoRaca) ?? new Map<Produto | Servico, number>();
                        consumoPorItem.forEach((quantidade, item) => {
                            consumoAtual.set(item, (consumoAtual.get(item) ?? 0) + quantidade);
                        });
                        consumoPorTipoRaca.set(tipoRaca, consumoAtual);
                    });
                }
            }
        });

        return consumoPorTipoRaca;
    }
}