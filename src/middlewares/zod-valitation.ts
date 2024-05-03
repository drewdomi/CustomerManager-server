import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { verifyReqBody } from "../utils/verify-req-body";

export const validateLogin =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (verifyReqBody(req))
      res.status(401).send({ message: "Email ou senha inválidos" });
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error: any) {
      return res.status(401).json({ message: error.issues[0].message });
    }
  };
