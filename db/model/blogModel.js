import { Sequelize } from "sequelize";
import { db } from "../db.js";

const Blog = db.define('blog', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

export default Blog