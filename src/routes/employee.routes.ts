import { Router } from 'express'
import { employeeController } from '../controllers/employee.controller'
import { zodMiddleware } from '../middlewares/zod.middleware'
import { createEmployeeSchema } from '../schemas/create-employee.schema'

export const employeeRouter = Router()

employeeRouter.post(
  '/employee',
  zodMiddleware(createEmployeeSchema),
  employeeController.create,
)
