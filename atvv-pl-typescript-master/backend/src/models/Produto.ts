import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("produtos")
class Produto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    codigoProduto: string;

    @Column('varchar')
    nomeProduto: string;

    @Column('varchar')
    descricaoProduto: string;

    @Column('varchar')
    precoProduto: string;
}

export default Produto;
