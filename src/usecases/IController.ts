import { Request, Response, NextFunction } from "express";

export interface IController {
    handle(request: Request, response: Response, next: NextFunction): Promise<Response>;
}