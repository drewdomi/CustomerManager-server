import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    email: z
      .string({
        message: "Email ou senha inválidos",
      })
      .email("Email ou senha inválidos"),
    password: z
      .string({
        message: "Email ou senha inválidos",
      })
      .min(4, "Email ou senha inválidos")
      .trim()
      .refine((s) => s.includes(" "), "Email ou senha inválidos"),
  }),
});
