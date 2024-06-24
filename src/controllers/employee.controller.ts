import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateEmployeeSchemaType } from '../models/types/employee'

const prisma = new PrismaClient()

export const employeeController = {
  async create(req: Request, res: Response) {
    try {
      const data = ({ body: req.body } as CreateEmployeeSchemaType).body

      const alreadyCreated = await prisma.employee.findFirst({
        where: {
          OR: [
            {
              rg: data.rg,
            },
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
        return res
          .status(409)
          .json({ message: 'Matrícula, RG ou CPF já existe' })

      await prisma.employee.create({
        data: {
          ...data,
          plan: data.plan.toUpperCase(),
        },
      })

      res.status(201).json({ message: 'Funcionário criado com sucesso' })
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao criar funcionário' })
    }
  },

  async findAll(_req: Request, res: Response) {
    try {
      const employees = await prisma.employee.findMany({
        select: {
          name: true,
          motherName: true,
          rg: true,
          cpf: true,
          birthDate: true,
          plan: true,
          civilState: true,
        },
      })

      res.status(200).json(employees || null)
    } catch (error) {
      console.error(error)
      res.status(400).json({ message: 'Erro ao listar funcionarios' })
    }
  },
}
