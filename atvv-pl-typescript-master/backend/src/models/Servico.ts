import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("servicos")
class Servico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    codigoServico: string;

    @Column('varchar')
    nomeServico: string;

    @Column('varchar')
    descricaoServico: string;

    @Column('varchar')
    precoServico: string;

}

export default Servico;
