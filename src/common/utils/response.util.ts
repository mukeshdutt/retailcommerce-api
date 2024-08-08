import { Response } from 'express';

// Send success response
export const sendSuccessResponse = (res: Response, data: any, message: string = 'Success') => {
  res.status(200).json({
    status: 200,
    message,
    data,
  });
};

// Send error response
export const sendErrorResponse = (res: Response, status: number, code: string, message: string, details: any = null) => {
  res.status(status).json({
    status,
    error: {
      code,
      message,
      details,
    },
  });
};