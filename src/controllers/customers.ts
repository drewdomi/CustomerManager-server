import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const customerController = {
  async getCustomers(req: Request, res: Response) {
    try {
      const allCustomers = await prisma.customers.findMany();
      res.send(allCustomers);
    } catch (error) {
      res.send(error);
    }
  },
  async createCustomer(req: Request, res: Response) {
    try {
      const { cpf } = req.body

      const customer = await prisma.customers.findUnique({
        where: {
          cpf: cpf
        }
      })
      if (customer) res.json({ error: "Cliente já cadastrado!!" })

      const createdCustomer = await prisma.customers.create({ data: req.body });
      res.json(createdCustomer);

    } catch (error) {
      res.send(error);
    }
  },

  async findById(req: Request, res: Response) {
    const { id } = req.params
    try {
      console.log(req.params)
      const customer = await prisma.customers.findUnique({
        where: {
          id: Number(id)
        }
      })

      if (!customer) res.json({ error: "Cliente não encontrado" })
      res.json(customer);
    } catch (error) {
      res.send(error);
    }
  }

};
