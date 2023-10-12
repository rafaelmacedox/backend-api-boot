import { AuthService } from "../../common/auth/auth";
import { CustomerLoginUseCase } from "./customer-login.usecase";
import { CustomerLoginController } from "./customer-login.controller";
import CustomerRepository from "../../repositories/impl/customer.repository";

const customerRepository = new CustomerRepository();
const authService = new AuthService();

const customerLoginUseCase = new CustomerLoginUseCase(customerRepository, authService);
const customerLoginController = new CustomerLoginController(customerLoginUseCase);

export { 
    customerLoginController
}