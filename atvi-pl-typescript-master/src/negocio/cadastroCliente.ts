import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Telefone from "../modelo/telefone"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do CPF: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do CPF, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = parseInt(partesData[2])
        let mes = parseInt(partesData[1]) - 1 // Meses em JavaScript são indexados a partir de 0
        let dia = parseInt(partesData[0])
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        
        let rgs: Array<RG> = [];
        let telefones: Array<Telefone> = [];

        // Adiciona pelo menos um RG
        this.adicionarRG(rgs);

        // Adiciona pelo menos um telefone
        this.adicionarTelefone(telefones);

        // Pergunta se deseja adicionar mais RGs
        while (this.entrada.receberTexto(`Deseja adicionar outro número de RG? (s/n): `).toLowerCase() === 's') {
            this.adicionarRG(rgs);
        }

        // Pergunta se deseja adicionar mais telefones
        while (this.entrada.receberTexto(`Deseja adicionar outro número de telefone? (s/n): `).toLowerCase() === 's') {
            this.adicionarTelefone(telefones);
        }

        let cliente = new Cliente(nome, nomeSocial, cpf, rgs, telefones);
        this.clientes.push(cliente)

        console.log(`\nCadastro de cliente concluído :)\n`);
    }

    private adicionarRG(rgs: Array<RG>): void {
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
        let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
        let partesDataRg = dataRg.split('/')
        let anoRg = parseInt(partesDataRg[2])
        let mesRg = parseInt(partesDataRg[1]) - 1 // Meses em JavaScript são indexados a partir de 0
        let diaRg = parseInt(partesDataRg[0])
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let rg = new RG(valorRg, dataEmissaoRg);
        rgs.push(rg);
    }

    private adicionarTelefone(telefones: Array<Telefone>): void {
        let ddd = this.entrada.receberTexto(`Por favor informe o número do ddd: `);
        let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `);
        let telefone = new Telefone(ddd, numero);
        telefones.push(telefone);
    }

}