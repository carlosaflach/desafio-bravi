export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
  AlreadyRegistered = 'AlreadyRegistered',
  UserInvalid = 'UserInvalid',
  EmailRequired = 'EmailRequired',
  PasswordRequired = 'PasswordRequired'
}

// esse é o tipo do objeto vai ser usado construir a resposta da API
type ErrorResponseObject = { 
  error: string;
  httpStatus: number
};

// aqui o tipo do catálogo
export type ErrorCatalog = {
  // onde cada chave desse objeto é uma chave do Enum ErrorTypes
  // e cada valor é um objeto de resposta da API
  [key in ErrorTypes]: ErrorResponseObject

};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    error: 'User not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    error: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
  AlreadyRegistered: {
    error: 'User already registered',
    httpStatus: 409
  },
  UserInvalid: {
    error: 'Username or password invalid',
    httpStatus: 401
  },
  EmailRequired: {
    error: 'Email is required',
    httpStatus: 400,
  },
  PasswordRequired: {
    error: 'Password is required',
    httpStatus: 400,
  }

};