import { validationResult } from "express-validator";
import { ValidationError } from "../helpers/errors.helper";

const handleValidate = (require, response, next) => {
    const errors = validationResult(require);

    if (errors.isEmpty()) {
      return next()
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push(`${err.param}: ${err.msg}`))
  
    next(new ValidationError( '', extractedErrors.join(', ') ));
}

export { handleValidate };
