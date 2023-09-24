import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const authenticateErrMsg: string = "You not allowed.";

export function authenticateApiKey(
  req: Request,
  res: Response,
  next: Function
) {
  if (req.header("x-api-key") === process.env.AUTH_API_KEY) {
    next();
  } else {
    return res
      .status(403)
      .send({ error: { code: 403, message: authenticateErrMsg } });
  }
}
