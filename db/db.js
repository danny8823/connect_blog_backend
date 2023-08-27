import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()

export const db = new Sequelize(process.env.SEQUELIZE, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
        }
    }
})

