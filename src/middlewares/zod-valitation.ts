import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const validateLogin =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      return next();
    } catch (error: any) {
      return res.status(401).json({ message: error.issues[0].message });
    }
  };
