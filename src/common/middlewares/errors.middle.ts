import { Request, Response, NextFunction } from "express";
import { 
    CustomerBlockedError,
    GeneralError,
    InvalidPassowrdError,
    UnauthorizedError,
    ValidationError,
} from "../helpers/errors.helper";

const errorsConfigs = [
    { class: ValidationError, i18n: 'Erro de Validação' },
    { class: InvalidPassowrdError, i18n: 'Senha incorreta'}
]

const getErrorConfig = error => errorsConfigs.find(errorConfig => error instanceof errorConfig.class);

const loadErrorMessage = error => {
    const errorConfig = getErrorConfig(error);
    
    if(errorConfig) {
        error.message = errorConfig.i18n;
    }
}

const handleErrors = (err, require: Request, response: Response, next: NextFunction) => {
    if (err instanceof GeneralError){
        loadErrorMessage(err);
    }

    if(err instanceof ValidationError
        || err instanceof InvalidPassowrdError
    ){
        return response
            .status(400)
            .send(err)
            .end();
    }

    if(err instanceof UnauthorizedError
        || err instanceof CustomerBlockedError){
        return response
            .status(401)
            .send(err)
            .end();
    }

    return response.status(500).json({
        status: 'error',
        statusCode: 'UNEXPECTED_ERROR',
        message: 'Ocorreu um erro inesperado.',
        details: err.message
    })
}

export { handleErrors };
