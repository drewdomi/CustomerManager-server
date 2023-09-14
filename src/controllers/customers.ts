import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { isValidCpf, unMaskCpf } from "../snippets/handleData";

const prisma = new PrismaClient();

export const customerController = {

  testApi(req: Request, res: Response) {

    try {
      res.send('Customer Manager API is running!!!');
    } catch (error) {
      res.send(error);
    }
  },

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
      const { cpf } = req.body;
      const newCpf = unMaskCpf(cpf);

      const customer = await prisma.customers.findUnique({
        where: {
          cpf: newCpf
        }
      });

      const newReqBody = { ...req.body, cpf: newCpf };

      if (!isValidCpf(newCpf)) throw { error: "CPF inválido" };
      if (customer) throw { error: "CPF já cadastrado" };

      const createdCustomer = await prisma.customers.create({ data: newReqBody });

      res.send(createdCustomer);
    } catch (error) {
      res.send(error);
    }
  },

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const customer = await prisma.customers.findUnique({
        where: {
          id: Number(id)
        }
      });

      if (!customer) throw {};

      res.send(customer);
    } catch (error) {
      res.status(404).send(error);
    }
  },

  async findByParams(req: Request, res: Response) {
    const { name, cpf } = req.query;

    try {
      const customer = await prisma.customers.findMany({
        where: {
          name: {
            contains: String(name),
            mode: 'insensitive',
          },
        }

      });

      cpf && res.send(customer.filter(customer => customer.cpf === unMaskCpf(String(cpf)))) ||
        res.send(customer);

    } catch (error) {
      res.send(error);
    }
  },

  async editCustomer(req: Request, res: Response) {
    const { id } = req.params;
    let { isActive } = req.body;

    isActive === "ativo" ? isActive = true : isActive = false;

    try {
      const customer = await prisma.customers.updateMany({
        where: {
          id: Number(id)
        },
        data: { ...req.body, isActive: isActive }
      });

      res.send(customer);
    } catch (error) {
      res.send(error);
    }
  }
};
