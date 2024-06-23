import { Router } from 'express'
import { employeeController } from '../controllers/employeeController'
import { zodMiddleware } from '../middlewares/zod-valitation'
import { createEmployeeSchema } from '../schemas/create-employee-schema'

export const employeeRouter = Router()

employeeRouter.post(
  '/employee',
  zodMiddleware(createEmployeeSchema),
  employeeController.create,
)
