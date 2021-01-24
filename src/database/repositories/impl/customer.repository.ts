import { getRepository, UpdateResult } from "typeorm";
import Customer from "../../../entities/customer.entity";
import { ICustomerRepository } from "../icustomer.repository";

export class CustomerRepository implements ICustomerRepository {

    findByEmail(email: string): Promise<Customer> {
        return getRepository(Customer)
            .createQueryBuilder()
            .where("email = :email", { email })
            .getOne();
    }
    
    update(customer: Customer): Promise<UpdateResult> {
        return getRepository(Customer)
                .update({ id: customer.id }, customer);
    }
    
}