import { Request, Response, NextFunction } from "express";
import { IUseCase } from "./IUseCase";

interface IController {
    handle(request: Request, response: Response, next: NextFunction): Promise<Response>;
}

export abstract class Controller {

    constructor(
        private useCase: IUseCase
    ){
        this.handle = this.handle.bind(this);
    }

    abstract impl(request: Request, response: Response): any;

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const data = this.impl(request, response);

            const result = await this.useCase.execute(data);

            const status = (result.statusCode) ? result.statusCode : 200;

            return response.status(status).send({ ...result });
        } catch(err) {            
            next(err);
        }
    }

}
