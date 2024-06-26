import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    
    private servicos: Array<Servico>

    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach(servico => {
            console.log(`Código do serviço: ` + servico.codigoServico);
            console.log(`Nome do serviço: ` + servico.nomeServico);
            console.log(`Descrição do serviço: ` + servico.descricaoServico);
            console.log(`Preço do serviço: ` + servico.precoServico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    
}