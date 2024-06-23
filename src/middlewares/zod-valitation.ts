import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'
import { verifyReqBody } from '../utils/verify-req-body'

export const zodMiddleware =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    if (!verifyReqBody(req))
      return res.status(422).send({ message: 'Sem body na requisição' })

    try {
      await schema.parseAsync({ body: req.body })
      return next()
    } catch (error) {
      if (error instanceof ZodError)
        return res.status(401).json({ message: error.issues[0].message })

      return res.status(500).json({ message: 'Internal Server Error' })
    }
  }
