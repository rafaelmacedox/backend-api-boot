import { CustomerEntity } from "../models/customer.entity";

export default interface ICustomerRepository {
  findByEmail(email: string): Promise<CustomerEntity>;
}