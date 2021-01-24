class GeneralError extends Error {
    code: string;
    details: string;

    constructor(code: string, message: string) {
        super(message);
        this.code = code;
    }

    toJSON() {
        return {
            status: 'error',
            statusCode: this.code,
            message: this.message
        }
    }
}

class DetailedGeneralError extends GeneralError {
    constructor(code, message, details) {
        super(code, message);
        this.details = details;
    }

    toJSON() {
        return {
            ...super.toJSON(),
            details: this.details,
        }
    }
}

class ValidationError extends DetailedGeneralError {
    constructor(message, details) {
        super('VALIDATION_FAILED', message, details);
    }
}

class UnauthorizedError extends GeneralError {
    constructor(message) {
        super('UNAUTHORIZED', message);
    }
}

class ResourceNotFoundError extends GeneralError {
    constructor(message) {
        super('RESOURCE_NOTFOUND', message)
    }
}

class CustomerBlockedError extends GeneralError {
    constructor(message) {
        super('CUSTOMER_BLOCKED', message);
    }
}

class InvalidPassowrdError extends GeneralError {
    constructor(message) {
        super('INVALID_PASSWORD', message);
    }
}

export {
    GeneralError,
    ValidationError,
    UnauthorizedError,
    ResourceNotFoundError,
    CustomerBlockedError,
    InvalidPassowrdError,
}