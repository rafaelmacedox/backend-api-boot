import { TokenHelper } from "../helpers/token.helper";
import { PasswordHelper } from "../helpers/password.helper";

export class AuthService {

    private tokenHelper: TokenHelper;
    private passwordHelper: PasswordHelper;

    constructor(){
        this.tokenHelper = new TokenHelper();
        this.passwordHelper = new PasswordHelper();
    }

    passwordIsValid(unencryptedPassword: string, cryptedPassword: string): boolean {
        return this.passwordHelper.checkIfUnencryptedPasswordIsValid(unencryptedPassword, cryptedPassword);
    }

    createToken(customerId: number, roles: string): string {
        return this.tokenHelper.signToken(customerId, roles);
    }

    encryptPassword(unencryptedPassword: string): string {
        return this.passwordHelper.encryptPassword(unencryptedPassword);
    }

}