import type { Request, Response, NextFunction } from "express";
import { ResponseError } from "../Errors/ResponseError";

export function HandlerEmptyRoute(req: Request, res: Response, __: NextFunction): void
{
  throw new ResponseError(`No mapped route: ${req.path}`, "0x01", 404);
}