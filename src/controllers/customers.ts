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
      if (customer) throw { error: "Cliente já cadastrado!!" }

      const createdCustomer = await prisma.customers.create({ data: req.body });

      res.send(createdCustomer);
    } catch (error) {
      res.send(error);
    }
  },

  async findById(req: Request, res: Response) {
    const { id } = req.params
    try {

      const customer = await prisma.customers.findUnique({
        where: {
          id: Number(id)
        }
      })
      if (!customer) throw { error: "Cliente não encontrado" }

      res.send(customer);
    } catch (error) {
      res.send(error);
    }
  },

  async findByParams(req: Request, res: Response) {
    const { name, cpf } = req.query
    try {

      const customer = await prisma.customers.findMany({
        where: {
          AND: {
            name: {
              contains: name?.toString()
            },
            cpf: cpf?.toString(),
          }
        }
      })

      res.send(customer);
    } catch (error) {
      res.send(error);
    }
  },

  async editCustomer(req: Request, res: Response) {
    const { id } = req.params
    try {

      const customer = await prisma.customers.updateMany({
        where: {
          id: Number(id)
        },
        data: req.body
      })

      res.send(customer);
    } catch (error) {
      res.send(error);
    }
  }
};
