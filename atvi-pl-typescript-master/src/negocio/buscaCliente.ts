import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Busca from "./busca";

export default class BuscaCliente extends Busca {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public buscar(): void {
        console.log("\nBusca de Cliente:");

        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente que deseja buscar: ");

        const cliente = this.encontrarClientePorCPF(cpfCliente);
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        console.log("\nDados do cliente:");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`CPF:  Número: ${cliente.getCpf.getValor}, Data de Emissão: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`);

        // Formatando os RGs
        const rgs = cliente.getRgs.map(rg => `Número: ${rg.getValor}, Data de Emissão: ${rg.getDataEmissao.toLocaleDateString()}`);
        console.log(`RG(s): ${rgs.join(" | ")}`);

        // Formatando os telefones
        const telefones = cliente.getTelefones.map(telefone => `(${telefone.getDdd}) ${telefone.getNumero}`);
        console.log(`Telefone(s): ${telefones.join(" | ")} \n`);
    }

    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}
