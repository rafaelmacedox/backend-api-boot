import { Router } from "express";
import { customerRouter } from "./customer.route";

const routes = Router();

routes.use('/customer', customerRouter);

export { routes }