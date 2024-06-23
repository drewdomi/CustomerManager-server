import { z } from 'zod'

export const loginSchema = z.object({
  body: z.object({
    code: z
      .string({
        message: 'Code é obrigatório',
      })
      .min(4)
      .max(8),
    password: z
      .string({
        message: 'Password é obrigatório',
      })
      .max(255),
  }),
})
