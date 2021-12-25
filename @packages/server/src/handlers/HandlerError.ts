import type { Request, Response, NextFunction } from "express";
import { ResponseError } from "../Errors/ResponseError";
import { ResponseErrorJson } from "../models/ResponseError";

export function HandlerErrorDefault(
  err: Error,
  _: Request,
  res: Response,
  __: NextFunction
): void {
  if (err instanceof ResponseError) {
    res.status(err.status);
    const errResponse: ResponseErrorJson = {
      code: err.code,
      msg: err.message,
    };
    res.json(errResponse)
  } else {
    const errResponse: ResponseErrorJson = {
      code: "500",
      msg: err.message,
    };
    res.status(500);
    res.json(errResponse);
  }
}
