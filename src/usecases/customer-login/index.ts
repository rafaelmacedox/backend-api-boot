import { AuthService } from "../../common/auth/auth";
import { CustomerRepository } from "../../database/repositories/impl/customer.repository";
import { CustomerLoginUseCase } from "./customer-login.usecase";
import { CustomerLoginController } from "./customer-login.controller";

const customerRepository = new CustomerRepository();
const authService = new AuthService();

const customerLoginUseCase = new CustomerLoginUseCase(customerRepository, authService);
const customerLoginController = new CustomerLoginController(customerLoginUseCase);

export { 
    customerLoginController
}