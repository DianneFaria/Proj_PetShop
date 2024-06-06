import Entrada from "../io/entrada";
import RegistroConsumo from "./cadastroConsumo";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class BuscarCompra {
    
    private registroConsumo: RegistroConsumo;
    private entrada: Entrada;

    constructor(registroConsumo: RegistroConsumo) {
        this.registroConsumo = registroConsumo;
        this.entrada = new Entrada();
    }

    public buscar(): void {

        console.log("\nBusca de Compra:");

        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente que você deseja ver as compras: ");
        const cliente = this.registroConsumo.listarTodosOsClientes().find(c => c.getCpf.getValor === cpfCliente);
        
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        const consumos = this.registroConsumo.listarConsumoPorCliente(cliente);
        
        if (!consumos || consumos.size === 0) {
            console.log("\nNenhum consumo encontrado para este cliente.\n");
            return;
        }

        console.log("\nDados das compras:\n");

        consumos.forEach((quantidade, item) => {
            const nomeItem = item instanceof Produto ? item.getNomeProduto : item.getNomeServico;
            const codigoItem = item instanceof Produto ? item.getCodigoProduto : item.getCodigoServico;
            const precoItem = item instanceof Produto ? item.getPrecoProduto : item.getPrecoServico;
            const descricaoItem = item instanceof Produto ? item.getDescricaoProduto : item.getDescricaoServico;

            console.log(`Código do item: ${codigoItem}`);
            console.log(`Nome do item: ${nomeItem}`);
            console.log(`Descrição: ${descricaoItem}`);
            console.log(`Quantidade: ${quantidade}`);
            console.log(`Valor unitário: R$${precoItem.toFixed(2)}`);
            console.log(`Valor total: R$${(precoItem * quantidade).toFixed(2)}\n`);
        });
    }
}
