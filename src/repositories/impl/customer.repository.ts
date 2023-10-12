import { prisma } from "../../common/libs/prisma";
import { CustomerEntity } from "../../models/customer.entity";
import ICustomerRepository from "../icustomer.repository";

export default class CustomerRepository implements ICustomerRepository {

  findByEmail(email: string): Promise<CustomerEntity> {
    return prisma.customer.findUnique({
      where: {
        email
      }
    })
  }
}