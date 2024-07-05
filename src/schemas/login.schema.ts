import { z } from 'zod'

export const loginSchema = z.object({
  body: z.object({
    code: z
      .string({
        message: 'Code é obrigatório',
      })
      .max(255),
    password: z
      .string({
        message: 'Password é obrigatório',
      })
      .max(255),
  }),
})
