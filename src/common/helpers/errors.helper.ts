import { ErrorData } from '../interfaces';

export const getError = (error: any): ErrorData => {
  if (error.response) {
    const response = error.response;
    switch (error.status) {
      case 400:
      case 401:
      case 403:
      case 404:
        return response;
      default:
        return {
          statusCode: 500,
          message: 'Ha ocurrido un error al procesar la solicitud',
          error: 'Error interno',
        };
    }
  }

  if (error.name) {
    switch (error.name) {
      case 'CastError':
        return {
          statusCode: 400,
          message: `El campo ${error.path} no tiene el formato correcto`,
          error: 'Formato de datos incorrecto',
        };

      default:
        return {
          statusCode: 400,
          message: `Ha ocurrido un error en la base de datos`,
          error: 'Error de BD',
        };
    }
  }

  return {
    statusCode: 500,
    message: `Ha ocurrido un error. Si persiste contacte a soporte técnico`,
    error: 'Internal Server Error',
  };
};
