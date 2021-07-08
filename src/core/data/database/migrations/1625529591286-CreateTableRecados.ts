import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";
import { TableForeignKey } from "typeorm/schema-builder/table/TableForeignKey";

export class CreateTableRecados1625529591286 implements MigrationInterface {

        public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(
                new Table({
                  name: "recados",
                  columns: [
                    {
                      name: "id",
                      type: "serial",
                      isPrimary: true,
                      isNullable: false,
                    },
                    {
                        name: "id_login",
                        type: "int",
                        isNullable: false, 
                    },
                    {
                        name: "titulo",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "descricao",
                        type: "varchar",
                        length: "1000",
                        isNullable: false,
                    },
                  ],
                })
            );
        
        await queryRunner.createForeignKey(
            "recados",
            new TableForeignKey({
              columnNames: ["id_login"],
              referencedColumnNames: ["id"],
              referencedTableName: "login",
              onDelete: "CASCADE",
            })
          );
    }    

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
