import express from 'express'
import { User } from '../db/model/index.js'
const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const {id} = req.body
        const user = await User.findByPk(id)
        res.send(user)
    } catch(error) {
        next(error)
    }
})

router.put('/:id', async(req,res,next) => {
    try {
        console.log(req.body)
        const update = req.body
        const user = await User.findByPk(req.params.id)
        const updatedUser = await user.update(update)
        res.send(updatedUser)
    } catch(error) {
        next(error)
    }
})

export default router