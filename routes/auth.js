import { Router } from 'express'
import { AuthController } from '../controllers/auth.js'

export const authRouter = Router()

authRouter.post('/', AuthController.home)
authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', AuthController.logout)
