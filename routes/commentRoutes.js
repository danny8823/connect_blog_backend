import express from 'express'
import Blog  from '../db/model/blogModel.js'
import User from '../db/model/userModel.js'
import Comment from '../db/model/commentModel.js'

const router = express.Router()

router.get('/', async(req,res,next) => {
    try {
        const id = req.query.value
        if(!id) {
            return res.status(400).send("No blog id!")
        }
        const comment = await Comment.findAll({
            where: {
                blogId: id
            },
            include: [User]
        })
        res.send(comment)
    } catch(error) {
        next(error)
    }
})

router.post('/', async(req,res,next) => {
    try {  
        const {comment, blogid, userid, username} = req.body 
    
        const commentPost = await Comment.create({
              comment: comment,
              username: username,
              blogId: blogid,
              userId: userid
        })
        res.send(commentPost)
    } catch(error) {
        next(error)
    }
})

router.put('/:id', async(req,res,next) => {
    try {
        const {id} = req.params
        const comment = await Comment.findByPk(id)
        const update = await comment.update(req.body)
        res.send(update)
    } catch(error) {
        next(error)
    }
})

router.delete('/:id', async(req,res,next) => {
    try {
        const {id} = req.params
        console.log(id)
        const comment = await Comment.findByPk(id)
        const del = await comment.destroy()
        res.send(del)
    } catch(error) {
        next(error)
    }
})

export default router