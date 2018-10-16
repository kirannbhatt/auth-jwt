import express from 'express'
const router = express.Router()
import authRouter from './authRouter'

router.use('/auth',authRouter)
export default router