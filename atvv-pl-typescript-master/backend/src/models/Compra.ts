import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("compras")
class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    codigoCompra: string;

    @Column('varchar')
    cpfCliente: string;

    @Column('varchar')
    codigoProdServ: string;

    @Column('varchar')
    quantidade: string;
}

export default Compra;
