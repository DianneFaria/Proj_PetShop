import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";

export default class AtualizacaoCliente extends Atualizacao {
    
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nAtualização de Cliente:");
        
        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente que deseja atualizar: ");
       
        const cliente = this.encontrarClientePorCPF(cpfCliente);
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do cliente:");
        console.log(`Nome: ${cliente.nome}`);
        console.log(`Nome Social: ${cliente.nomeSocial}`);
        console.log(`CPF: ${cliente.getCpf.getValor}`);
        console.log(`Data de Emissão do CPF: ${cliente.getCpf.getDataEmissao}`);

   
        const novoNome = this.entrada.receberTexto("Novo nome do cliente: ");
        const novoNomeSocial = this.entrada.receberTexto("Novo nome social do cliente: ");
        const novoCPF = this.entrada.receberTexto("Novo número do CPF: ");
        const novaDataEmissao = this.entrada.receberTexto("Nova data de emissão do CPF (dd/mm/yyyy): ");

      
        cliente.nome = novoNome;
        cliente.nomeSocial = novoNomeSocial;
        cliente.getCpf.setValor(novoCPF);
        cliente.getCpf.setDataEmissao(new Date(novaDataEmissao));

        

        console.log("\nCliente atualizado com sucesso!\n");
    }

    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
    

}