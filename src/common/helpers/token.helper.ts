import jwt from 'jsonwebtoken';

export class TokenHelper {

    signToken(customerId: number, roles: string): string {
        return jwt.sign(
            { customerId, roles },
            process.env.JWT_SECRET,
            { expiresIn: Math.floor(Date.now() / 1000) + process.env.JWT_EXPIRESIN }
        )
    }

}