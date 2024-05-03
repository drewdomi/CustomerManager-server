import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authController = {
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // if (!email || !password) {
      //   return res.status(401).send({ error: "Email ou senha inválidos" });
      // }
      const customer = await prisma.customers.findFirst({
        where: {
          email: email,
        },
        select: {
          name: true,
          email: true,
          birthday: true,
          password: true,
        },
      });

      if (!customer) {
        return res.status(404).json({ error: "Cliente não encontrado" });
      }

      const validPassword = await bcrypt.compare(password, customer.password);

      if (!validPassword) {
        return res.status(401).send({ error: "Email ou senha incorretos" });
      }

      const resUser = {
        name: customer.name,
        email: customer.email,
        birthday: customer.birthday,
      };

      return res.send(resUser);
    } catch (error) {
      console.log(error);
    }
  },
};
