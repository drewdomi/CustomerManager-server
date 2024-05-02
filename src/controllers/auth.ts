import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const customer = await prisma.customers.findFirst({
      where: {
        email: email,
      },
    });

    if (!customer) {
      return res.status(404).json("Cliente não encontrado");
    }

    const validPassword = await bcrypt.compare(
      password,
      customer.password || "",
    );

    if (!validPassword) {
      return res.status(401).send({ error: "usuario ou senha incorretos." });
    }

    return res.send(customer);
  },
};
