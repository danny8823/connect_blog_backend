import User  from "../../db/model/userModel.js";

export const requireToken = async (req,res,next) => {
    try {
        const token = req.headers.authorization
        const user = await User.findByToken(token)
        req.user = user
        next()
    } catch(err) {
        next(err)
    }
}

