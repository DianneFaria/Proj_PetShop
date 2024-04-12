import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizacao from "./atualizacao";

export default class AtualizacaoPet extends Atualizacao {
    private clientes: Cliente[];
    private entrada: Entrada;

    constructor(clientes: Cliente[]) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log("\nAtualização de Pet:");

        const cpfCliente = this.entrada.receberTexto("Informe o CPF do cliente para o qual deseja atualizar o pet: ");
        const cliente = this.encontrarClientePorCPF(cpfCliente);
        
        if (!cliente) {
            console.log("\nCliente não encontrado.\n");
            return;
        }

        console.log("\nPets do Cliente:");
        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1}. Nome: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
        });

        const indicePet = this.entrada.receberNumero("Informe o número do pet que deseja atualizar: ");
        const pet = cliente.getPets[indicePet - 1];

        if (!pet) {
            console.log("\nPet não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do pet:");
        console.log(`Nome: ${pet.getNome}`);
        console.log(`Tipo: ${pet.getTipo}`);
        console.log(`Raça: ${pet.getRaca}`);
        console.log(`Gênero: ${pet.getGenero}`);

        const novoNome = this.entrada.receberTexto("Novo nome do pet: ");
        const novoTipo = this.entrada.receberTexto("Novo tipo do pet: ");
        const novaRaca = this.entrada.receberTexto("Nova raça do pet: ");
        const novoGenero = this.entrada.receberTexto("Novo gênero do pet: ");

        pet.setNome(novoNome);
        pet.setTipo(novoTipo);
        pet.setRaca(novaRaca);
        pet.setGenero(novoGenero);

        console.log("\nPet atualizado com sucesso!\n");
    }

    public encontrarClientePorCPF(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf.getValor === cpf);
    }
}
    
