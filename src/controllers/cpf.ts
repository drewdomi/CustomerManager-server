import { Request, Response } from 'express'
import { isValidCpf } from '../snippets/handleData'

export const cpfController = {
  verifyCpf(req: Request, res: Response) {
    const { cpf } = req.params

    const isValid = isValidCpf(String(cpf))
    res.send(isValid)
  },
}
