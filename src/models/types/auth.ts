import { z } from 'zod'
import { loginSchema } from '../../schemas/login.schema'

export type LoginSchemaType = z.infer<typeof loginSchema>
