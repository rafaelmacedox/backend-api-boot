import { AuthService } from "../../common/auth/auth";
import { CustomerBlockedError, GeneralError, InvalidPassowrdError, UnauthorizedError, ValidationError } from "../../common/helpers/errors.helper";
import { ICustomerRepository } from "../../database/repositories/icustomer.repository";
import { IUseCase } from "../IUseCase";
import { CustomerLoginDto } from "./customer-login.dto";
import { CustomerStatusEnum } from "../../common/enum/customer-status.enum";
import { IUseCaseReturn } from "../IUseCaseReturn";

export class CustomerLoginUseCase implements IUseCase {

    constructor(
        private customerRepository: ICustomerRepository,
        private authService: AuthService
    ){}

    async execute(data: CustomerLoginDto): Promise<IUseCaseReturn> {
        const customerAlreadyExists = await this.customerRepository.findByEmail(data.email);

        if(!customerAlreadyExists){
            throw new UnauthorizedError('Não foi encontrado um Usuário com este Email');
        }

        if(!this.authService.passwordIsValid(data.password, customerAlreadyExists.password)){
            throw new InvalidPassowrdError('');
        }

        if(customerAlreadyExists.status == CustomerStatusEnum.Bloqueado || customerAlreadyExists.status == CustomerStatusEnum.Inativo){
            throw new CustomerBlockedError('Usuário Bloqueado ou Expirado');
        }

        customerAlreadyExists.lastLogin = new Date();

        await this.customerRepository.update(customerAlreadyExists);

        return { 
            status: 'success',
            statusCode: 200,
            data: {
                token: this.authService.createToken(customerAlreadyExists.id, customerAlreadyExists.roles),
                expiresIn: process.env.JWT_EXPIRESIN
            }
        }
    }

}