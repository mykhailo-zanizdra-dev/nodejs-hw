import { HttpError } from 'http-errors';

const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.name,
      error: err.message,
    });
  }

  const statusCode = err.statusCode ?? 500;

  res.status(statusCode).json({
    status: statusCode,
    message: 'Internal server error',
    error: err.message,
  });
};

export default errorHandler;
