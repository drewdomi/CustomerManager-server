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
      const createdCustomer = await prisma.customers.create({ data: req.body });
      res.json(createdCustomer);
    } catch (error) {
      console.log(error);
      console.log(req.body);
      res.send(error);
    }
  },
};
