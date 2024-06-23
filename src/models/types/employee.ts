import { z } from 'zod'
import { createEmployeeSchema } from '../../schemas/create-employee.schema'

export type CreateEmployeeSchemaType = z.infer<typeof createEmployeeSchema>
