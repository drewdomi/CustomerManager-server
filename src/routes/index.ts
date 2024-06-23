import { Response, Router } from 'express'
import { employeeRouter } from './employee.routes'

const routes = Router()

routes.get('/', (_req, res: Response) => {
  res
    .writeHead(301, {
      Location: process.env.CLIENT_URL,
    })
    .end()
})

routes.use(employeeRouter)

export { routes }
