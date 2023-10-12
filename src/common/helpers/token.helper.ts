import jwt from 'jsonwebtoken';
import ApplicationConfig from '../ApplicationConfig';

export class TokenHelper {

    signToken(customerId: string, roles: string): string {
        return jwt.sign(
            { customerId, roles },
            ApplicationConfig.JWT_SECRET,
            { expiresIn: Math.floor(Date.now() / 1000) + Number(ApplicationConfig.JWT_EXPIRESIN) }
        )
    }

}