import {MigrationInterface, QueryRunner} from "typeorm";
import Customer from "../../entities/customer.entity";
import { CustomerSeed } from "../seeds/customer.seed";

export class CustomerSeed1611507889362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const ENVIRONMENT = process.env.NODE_ENV;

        const runSeed: boolean = ENVIRONMENT == 'typeorm';

        if (runSeed) {
            await queryRunner.manager.getRepository(Customer).save(CustomerSeed());
        }

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
