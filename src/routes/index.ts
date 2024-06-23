import { Router } from 'express'
import { employeeRouter } from './employee.routes'

const routes = Router()

routes.use(employeeRouter)

export { routes }
