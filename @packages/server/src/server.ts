import express, { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import { HandlerErrorDefault } from "./handlers/HandlerError";
import { HandlerEmptyRoute } from "./handlers/HandlerEmptyRoute";

function CompressionFilter(req: Request, res: Response): boolean
{
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }
 
  // fallback to standard filter function
  return compression.filter(req, res)
}

export class Server {
  private static instance: Express | null = null;

  public static Instance(): Express {
    if (Server.instance != null) return Server.instance;
    Server.instance = express();
    /**
     * Configure middleware
     */

    // For parsing application/json
    Server.instance.use(express.json());

    // For parsing application/x-www-form-urlencoded
    Server.instance.use(express.urlencoded({ extended: true }));

    // Parse cookies
    Server.instance.use(cookieParser());

    // Compress response
    Server.instance.use(compression({ filter: CompressionFilter }));

    Server.instance.get("/", function (_, res) {
      res.send("Hello World");
    });

    // Handle response for routes that has no handler
    Server.instance.use(HandlerEmptyRoute);

    // Handle default error response
    Server.instance.use(HandlerErrorDefault);

    return Server.instance;
  }
}
