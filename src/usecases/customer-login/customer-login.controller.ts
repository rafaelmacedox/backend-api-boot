import { Request } from "express";
import { Controller } from "../IController";
import { CustomerLoginDto } from "./customer-login.dto";

export class CustomerLoginController extends Controller {

    impl(request: Request): CustomerLoginDto {
        const loginDto: CustomerLoginDto = request.body;

        return loginDto;
    }

}