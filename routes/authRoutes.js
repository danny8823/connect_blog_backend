import express from 'express'
import { User } from '../db/model/index.js'
const router = express.Router()

router.post('/login', async(req,res,next) => {
    try {
        return res.send({token: await User.authenticate(req.body)})
    } catch(error) {
        next(error)
    }
})

router.post('/signup', async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        res.send({ token: await user.generateToken() });
    } catch (err) {
        if (err.name === 'SequelizeUniqueConstraintError') {
            res.status(401).send('User already exists');
        } else {
            next(err);
        }
    }
});

router.get('/me', async (req, res, next) => {
    try {
        res.send(await User.findByToken(req.headers.authorization));
    } catch (ex) {
        next(ex);
    }
});

export default router