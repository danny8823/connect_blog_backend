import express from 'express'
import { Favorites } from '../db/model/index.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const id = req.query.value
        if(!id) {
            return res.status(400).json({error: 'User id is missing'})
        }
        const fav = await Favorites.findAll({
            where: {
                userId: id
            }
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {
        const {title, content, userId, blogId} = req.body
        const fav = await Favorites.create({
            title: title,
            content: content,
            userId: userId,
            blogId: blogId,
        })
        res.send(fav)
    } catch(error) {
        next(error)
    }
})

router.delete('/:id', async(req,res,next) => {
    try {
        const {id} = req.params
        const fav = await Favorites.findByPk(id)
        if(fav === null) {
            res.send('nothing to destroy')
        } else {
            await fav.destroy()
            res.send(fav)
        }
    } catch(error) {
        next(error)
    }
})
export default router