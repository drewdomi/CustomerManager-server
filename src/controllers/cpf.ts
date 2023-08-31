import { Request, Response } from "express";
import { isValidCpf } from "../snippets/handleData";

export const cpfController = {

  async verifyCpf(req: Request, res: Response) {

    const { cpf } = req.params;
    const isValid = await isValidCpf(String(cpf));
    res.send(isValid);
  },
};