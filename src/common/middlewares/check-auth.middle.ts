import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["authorization"];
  let jwtPayload;
  
  try {
    jwtPayload = await jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
    res.locals.jwtPayload = jwtPayload;

    next();
  } catch (error) {
    res.status(401).send({
        status: 'error',
        statusCode: 'EXPIRED_SESSION',
        message: 'Sua sessão expirou ou não é válida!',
        details: JSON.stringify(error)
    });
  }
};
