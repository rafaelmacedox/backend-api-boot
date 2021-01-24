import { Router } from "express";
import { checkJwt } from "../common/middlewares/check-auth.middle";
import { checkRoles } from "../common/middlewares/check-roles.middle";
import { handleValidate } from "../common/middlewares/validation.middle";
import { customerLoginController } from "../usecases/customer-login";
import { customerLoginValidationRules } from "../usecases/customer-login/customer-login.validation";

const customerRouter = Router();

customerRouter.post(
    '/login',
    customerLoginValidationRules(),
    handleValidate,
    (request, response, next) => customerLoginController.handle(request, response, next))

customerRouter.get(
    '/test-jwt',
    checkJwt,
    (request, response, next) => response.status(200).send({ message: 'ok' }))

customerRouter.get(
    '/test-roles',
    checkJwt,
    checkRoles('ADMIN,NEWRAFFLE'),
    (request, response, next) => response.status(200).send({ message: 'ok' }))

export {
    customerRouter
}