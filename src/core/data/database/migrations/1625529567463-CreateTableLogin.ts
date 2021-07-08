import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";

export class CreateTableLogin1625529567463 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"login",
                columns:[
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                        isNullable: false,
                      },
                      {
                        name: "email",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                      },
                      {
                        name: "password",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                      },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
