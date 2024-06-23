import { Router } from 'express'
import { employeeRouter } from './employee'

export * from './employee'

const routes = Router()

routes.use(employeeRouter)

export { routes }
