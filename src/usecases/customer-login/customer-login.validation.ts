import { body } from "express-validator";

const customerLoginValidationRules = () => {
    return [ 
        body('email').isString(),
        body('password').isString()
    ]
}

export {
    customerLoginValidationRules
}
