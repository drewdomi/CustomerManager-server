import { z } from 'zod'
import { civilState } from '../models/enum/civilState'

export const createEmployeeSchema = z.object({
  body: z.object({
    name: z
      .string({
        message: 'Nome é obrigatório',
      })
      .trim()
      .min(3)
      .max(255),
    motherName: z
      .string({
        message: 'Nome da mãe é obrigatório',
      })
      .trim()
      .min(3)
      .max(255),
    rg: z
      .string({
        message: 'RG é obrigatório',
      })
      .min(9)
      .max(9),
    cpf: z
      .string({
        message: 'CPF é obrigatório',
      })
      .min(11)
      .max(11),
    birthDate: z
      .string({
        message: 'BirthDate é obrigatório',
      })
      .max(10, 'BirthDate precisa seguir o formato yyyy-mm-dd')
      .min(10, 'BirthDate precisa seguir o formato yyyy-mm-dd'),
    civilState: z.nativeEnum(civilState, {
      required_error: 'CivilState é obrigatório',
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
        message: 'ValidityDate é obrigatório',
      })
      .max(10, 'ValidityDate precisa seguir o formato yyyy-mm-dd')
      .min(10, 'ValidityDate precisa seguir o formato yyyy-mm-dd'),
    registration: z.string().min(7).max(8),
  }),
})
