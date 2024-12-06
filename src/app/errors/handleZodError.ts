import { ZodError, ZodIssue } from 'zod';
import { IErrorSources } from '../interface/error';

const handleZodError = (error: ZodError) => {
  const errorSources: IErrorSources = error.issues.map((issuse: ZodIssue) => {
    return {
      path: issuse?.path[issuse.path.length - 1],
      message: issuse?.message,
    };
  });
  const statusCode = 400;
  return {
    statusCode,
    message: 'validation error',
    errorSources,
  };
};

export default handleZodError;