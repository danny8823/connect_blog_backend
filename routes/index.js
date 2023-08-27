import express from 'express'
import userRouters from './userRoutes.js'
import authRouter from './authRoutes.js'
import blogRouter from './blogRoutes.js'
import favsRouter from './favRoutes.js'
import commRouter from './commentRoutes.js'
import { requireToken } from './middleware/gatekeep.js'

const router = express.Router()

router.use('/api/users',userRouters,requireToken)
router.use('/auth', authRouter, requireToken)
router.use('/api/blogs', blogRouter, requireToken)
router.use('/api/favs', favsRouter, requireToken)
router.use('/api/comments', commRouter, requireToken)

export default router
