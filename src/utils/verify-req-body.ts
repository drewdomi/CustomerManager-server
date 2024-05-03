import { Request } from "express";

export function verifyReqBody(req: Request) {
  if (Object.keys(req.body).length === 0) {
    return false;
  }
}
