import { NextFunction, Request, Response } from "express";

export const checkRoles = (needRoles: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const customerRoles = res.locals.jwtPayload.roles;
        const needRolesList = needRoles.split(',');

        needRolesList.forEach(role => {
            if(!customerRoles.split(',').includes(role)) {
                res.status(401).send({
                    status: 'error',
                    statusCode: 'UNAUTHORIZED',
                    message: 'Você não possui permissão para acessar este recurso',
                    details: role
                })
            }
        })

        next();
    };
};
