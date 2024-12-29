import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { ErrorCodes, ErrorMessages } from '../constants/error-codes';

// Send success response
export const sendSuccessResponse = (res: Response, data: any, message: any = null) => {
  res.status(HttpStatus.OK).json({
    message,
    data,
  });
};

// Send error response
export const sendErrorResponse = (res: Response, statusCode: HttpStatus, errorCode: ErrorCodes, details: any = null) => {
  res.status(statusCode).json({
    error: {
      errorCode: errorCode,
      errorMessage: ErrorMessages[errorCode] == undefined ? "Unknown error" : ErrorMessages[errorCode],
      details: details,
    }
  });
};