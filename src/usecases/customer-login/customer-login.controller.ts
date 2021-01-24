import { NextFunction, Request, Response } from "express";
import { IController } from "../IController";
import { IUseCase } from "../IUseCase";
import { CustomerLoginDto } from "./customer-login.dto";

export class CustomerLoginController implements IController {

    constructor(
        private useCase: IUseCase
    ){}

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const loginDto: CustomerLoginDto = request.body;

            const token = await this.useCase.execute(loginDto);
            const expiresIn = process.env.JWT_EXPIRESIN;

            return response.status(200).send({ token, expiresIn: Number(expiresIn) });
        } catch(err) {
            next(err);
        }
    }

}