import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const jwtMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.headers.cookie)
      return res.status(403).json({ message: 'Acesso negado' })

    const token = req.headers.cookie.slice(10)

    const tokenSecret = process.env.TOKEN_SECRET || ''

    jwt.verify(token, tokenSecret, (err, _dec) => {
      if (err) return res.status(403).json({ message: 'Acesso negado' })

      next()
    })
  } catch (error) {}
}
