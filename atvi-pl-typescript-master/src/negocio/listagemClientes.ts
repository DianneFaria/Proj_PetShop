import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF:  Número: ${cliente.getCpf.getValor}, Data de Emissão: ${cliente.getCpf.getDataEmissao.toLocaleDateString()}`);

            const rgs = cliente.getRgs.map(rg => `Número: ${rg.getValor}, Data de Emissão: ${rg.getDataEmissao.toLocaleDateString()}`);
            console.log(`RG(s): ${rgs.join(" | ")}`);

            const telefones = cliente.getTelefones.map(telefone => `(${telefone.getDdd}) ${telefone.getNumero}`);
            console.log(`Telefone(s): ${telefones.join(" | ")} \n`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}