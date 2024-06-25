import { Router } from 'express'
import { authController } from '../controllers/auth.controller'
import { zodMiddleware } from '../middlewares/zod.middleware'
import { loginSchema } from '../schemas/login.schema'

export const authRouter = Router()

authRouter.post('/auth', zodMiddleware(loginSchema), authController.login)

authRouter.get('/logout', authController.logout)
