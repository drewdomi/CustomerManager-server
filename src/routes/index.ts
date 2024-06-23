import { Response, Router } from 'express'
import { authRouter } from './auth.routes'
import { employeeRouter } from './employee.routes'

export const router = Router()

router.get('/', (_req, res: Response) => {
  res
    .writeHead(301, {
      Location: process.env.CLIENT_URL,
    })
    .end()
})

router.use(employeeRouter)
router.use(authRouter)
