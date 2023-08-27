import { Sequelize } from "sequelize";
import { db } from "../db.js";

const Favorites = db.define('favorites', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    blogId : {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Favorites.beforeCreate(async (favorite, options) => {
    const existingFavorite = await Favorites.findOne({
      where: {
        blogId: favorite.blogId,
        userId: favorite.userId,
      },
      raw: true,
    });
  
    if (existingFavorite) {
      throw new Error('Duplicate favorite entry');
    }
  });
  
export default Favorites