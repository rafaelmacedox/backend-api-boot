export default {
    "swagger": "2.0",
    "info": {
        "version": "0.0.1",
        "title": "Backend API Boot",
        "description": "Base completa de um backend para inicialização rápida de uma API",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "host": "localhost:3334",
    "basePath": "/",
    "tags": [
        {
            "name": "Customers",
            "description": "Gerenciar Clientes"
        },
    ],

    "paths": {
        "/customer/login": {
            "post": {
                "tags": [
                    "Customers"
                ],
                "summary": "Realiza o login do usuário com a API",
                "parameters": [
                    {
                        "name": "customer",
                        "in": "body",
                        "description": "Informações para logar",
                        "schema": {
                            "$ref": "#/definitions/CustomerLogin"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Logado com sucesso",
                        "schema": {
                            "$ref": "#/definitions/ResponseCustomerLogin"
                        }
                    },
                    "401": {
                        "description": "Não foi encontrado um Usuário com este Email"
                    },
                    "400": {
                        "description": "Senha Incorreta"
                    },
                    "401": {
                        "description": "Usuário Bloqueado ou Expirado"
                    },
                    "500": {
                        "description": "Ocorreu um erro inexperado"
                    }
                }
            }
        },
    },

    "definitions": {
        "CustomerLogin": {
            "required": [
                "email",
                "password",
            ],
            "properties": {
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
            }
        },
        "ResponseCustomerLogin": {
            "properties": {
                "token": {
                    "type": "string"
                },
                "expiresIn": {
                    "type": "number"
                }
            }
        }
    },
    "schemes": [
        "http"
    ],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ]
}
