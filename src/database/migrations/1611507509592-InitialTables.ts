import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialTables1611507509592 implements MigrationInterface {
    name = 'InitialTables1611507509592'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."customers" ("id" SERIAL NOT NULL, "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "roles" character varying NOT NULL, "cpf" integer NOT NULL, "status" integer NOT NULL, "last_login" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, CONSTRAINT "UQ_53538d1b7d4910ebe4b47618975" UNIQUE ("email", "cpf"), CONSTRAINT "PK_7e11fa8174c27f53e0935294b1e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."customers"`);
    }

}
