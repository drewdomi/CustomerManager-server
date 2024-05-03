import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        required_error: "Email é obrigatório",
        message: "Email inválido",
      })
      .email("Email precisa ser válido"),
    password: z
      .string({
        required_error: "Senha é obrigatória",
        message: "Senha inválida",
      })
      .min(4, "Senha precisa ter no mínimo 4 caracteres"),
  }),
});
