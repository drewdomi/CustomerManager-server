import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import ms from 'ms'
import { LoginSchemaType } from '../models/types/auth'

const prisma = new PrismaClient()

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const data = ({ body: req.body } as LoginSchemaType).body

      const user = await prisma.user.findUnique({
        where: {
          code: data.code,
        },
      })

      if (!user)
        return res.status(401).json({ message: 'Código ou senha incorretos' })

      const isValidPassword = await bcrypt.compare(data.password, user.password)

      if (!isValidPassword)
        return res.status(401).json({ message: 'Código ou senha incorretos' })

      const tokenSecret = process.env.TOKEN_SECRET || 'defaultTokenSecret'
      const tokenExp = process.env.TOKEN_EXP || '8h'

      const token = jwt.sign({ code: user.code }, tokenSecret, {
        expiresIn: tokenExp,
      })

      const tokenExpires = new Date(Date.now() + ms(tokenExp)).toUTCString()

      res
        .writeHead(200, {
          'Set-Cookie': `sessionId=${token}; Expires=${tokenExpires}; HttpOnly; Secure; SameSite=None`,
          'Access-Control-Allow-Credentials': 'true',
        })
        .send()
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao fazer login' })
    }
  },

  logout(req: Request, res: Response) {
    try {
      if (!req.headers.cookie) return res.status(204).send()
      res.clearCookie('sessionId', { httpOnly: true }).status(204).send()
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao fazer logout' })
    }
  },
}
