import bcrypt from 'bcryptjs';

export class PasswordHelper {

    encryptPassword(password: string): string {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string, cryptedPassword: string): boolean {
        return bcrypt.compareSync(unencryptedPassword, cryptedPassword);
    }

}