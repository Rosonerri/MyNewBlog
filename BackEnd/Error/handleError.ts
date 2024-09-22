import { NextFunction, Request, Response } from "express";
import { HTTP } from "../utils/enums";
import { mainError } from "./mainError";

const errorBuilder = (err: mainError, res: Response) => {
  res.status(HTTP.Bad_Request).json({
    name: err.name,
    message: err.message,
    success: err.success,
    error: err,
  });
};

export const handleError = (
  err: mainError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorBuilder(err, res);
};
