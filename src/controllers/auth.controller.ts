import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express'
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

      res.send(200).json({ message: 'Login feito com sucesso' })

      const isValidPassword = await bcrypt.compare(data.password, user.password)

      if (!isValidPassword)
        return res.status(401).json({ message: 'Código ou senha incorretos' })
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao fazer login' })
    }
  },
}
