import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientes1714924125342 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                    },
                    {
                        name: 'nomeSocial',
                        type: 'varchar',
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                    },
                    {
                        name: 'dataCpf',
                        type: 'varchar',
                    },
                    {
                        name: 'rg',
                        type: 'varchar',
                    },
                    {
                        name: 'dataRg',
                        type: 'varchar',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes");
    }

}
