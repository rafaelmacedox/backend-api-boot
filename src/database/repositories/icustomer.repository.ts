import { UpdateResult } from "typeorm";
import Customer from "../../entities/customer.entity";

export interface ICustomerRepository {
    findByEmail(email: string): Promise<Customer>;
    update(customer: Customer): Promise<UpdateResult>;
}