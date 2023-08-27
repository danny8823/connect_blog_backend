import Blog from "./blogModel.js";
import User from "./userModel.js"
import Favorites from "./favoritesModel.js";
import Comment from "./commentModel.js";

User.hasMany(Blog)
Blog.belongsTo(User)

User.hasMany(Favorites)
Favorites.belongsTo(User)

Blog.hasMany(Comment)
Comment.belongsTo(Blog)

User.hasMany(Comment)
Comment.belongsTo(User)

export {
    Blog,
    User,
    Favorites,
    Comment
}