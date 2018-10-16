import express from 'express'
import authController from '../controllers/authController'
const authRouter = express.Router()

authRouter.route('/register')
  .post(authController.register)

export default authRouter