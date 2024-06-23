import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateEmployeeSchemaType } from '../types/employee'
const prisma = new PrismaClient()

export const employeeController = {
  async create(req: Request, res: Response) {
    try {
      const data = ({ body: req.body } as CreateEmployeeSchemaType).body

      const alreadyCreated = await prisma.employee.findFirst({
        where: {
          OR: [
            {
              cpf: data.cpf,
            },
            {
              registration: data.registration,
            },
          ],
        },
      })

      if (alreadyCreated)
        return res.status(409).json({ message: 'Matrícula ou CPF já existe.' })

      await prisma.employee.create({
        data: data,
      })

      res.status(201).json({ message: 'Funcionário criado com sucesso.' })
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao criar funcionário.' })
    }
  },
}
