import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("clientes")
class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    nome: string;

    @Column('varchar')
    nomeSocial: string;

    @Column('varchar')
    cpf: string;

    @Column('varchar')
    dataCpf: string;

    @Column('varchar')
    rg: string;

    @Column('varchar')
    dataRg: string;

    @Column('varchar')
    telefone: string;
}

export default Cliente;
