import { civilState } from '@prisma/client'
import { z } from 'zod'

export const createEmployeeSchema = z.object({
  body: z.object({
    name: z
      .string({
        message: 'Nome é obrigatório',
      })
      .trim(),
    motherName: z
      .string({
        message: 'Nome da mãe é obrigatório',
      })
      .trim(),
    cpf: z.string({
      message: 'CPF é obrigatório',
    }),
    birthDate: z
      .string({
        message: 'BirthDate é obrigatório',
      })
      .max(10, 'BirthDate precisa seguir o formato yyyy-mm-dd')
      .min(10, 'BirthDate precisa seguir o formato yyyy-mm-dd'),
    civilState: z.nativeEnum(civilState, {
      required_error: 'Estado civil é obrigatório',
      message:
        'CivilState precisa ser SOLTEIRO | CASADO | SEPARADO | DIVORCIADO | VIUVO',
    }),
    plan: z.string().min(4).max(10),
    admissionDate: z
      .string({
        message: 'AdmissionDate é obrigatório',
      })
      .max(10, 'AdmissionDate precisa seguir o formato yyyy-mm-dd')
      .min(10, 'AdmissionDate precisa seguir o formato yyyy-mm-dd'),
    validityDate: z
      .string({
        message: 'AdmissionDate é obrigatório',
      })
      .max(10, 'AdmissionDate precisa seguir o formato yyyy-mm-dd')
      .min(10, 'AdmissionDate precisa seguir o formato yyyy-mm-dd'),
    registration: z.string().min(7).max(8),
  }),
})
