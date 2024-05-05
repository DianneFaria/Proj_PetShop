import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("pets")
class Pet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    cpfDono: string;

    @Column('varchar')
    nomePet: string;

    @Column('varchar')
    tipo: string;

    @Column('varchar')
    raca: string;

    @Column('varchar')
    genero: string;
}

export default Pet;
