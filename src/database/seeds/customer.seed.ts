import { CustomerStatusEnum } from "../../common/enum/customer-status.enum";
import Customer from "../../entities/customer.entity";

export const CustomerSeed = () => {
    const customer = new Customer;

    customer.email = 'rafael@ledius.com.br';
    customer.firstName = 'Rafael';
    customer.lastName = 'Macedo';
    customer.password = '$2a$10$g27YOrjO55fBt.bWneeA3O/ZA8bxB5ma2havMrPtEq3saZAe1UBoe'; //12345
    customer.cpf = Number('00000000000');
    customer.createdAt = new Date();
    customer.lastLogin = new Date();
    customer.status = CustomerStatusEnum.Ativo;
    customer.roles = ['ADMIN'].join(',');

    return [ customer ];
    
}
