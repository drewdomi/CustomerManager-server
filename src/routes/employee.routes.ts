import { Router } from 'express'
import { employeeController } from '../controllers/employee.controller'
import { jwtMiddleware } from '../middlewares/jwt.middleware'
import { zodMiddleware } from '../middlewares/zod.middleware'
import { createEmployeeSchema } from '../schemas/create-employee.schema'

export const employeeRouter = Router()

employeeRouter.post(
  '/employee',
  jwtMiddleware,
  zodMiddleware(createEmployeeSchema),
  employeeController.create,
)

employeeRouter.get('/employee', jwtMiddleware, employeeController.findAll)
