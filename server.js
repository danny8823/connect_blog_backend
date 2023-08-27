import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/db.js'
import routers from './routes/index.js'
import { seed } from './seed.js'

const port = process.env.PORT
const server = express()

server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/', routers) 

const runServer = async () => {
    try {
        seed()
        server.listen(port, () => {
            console.log("SERVER up and listening on port:", port)
        })
    } catch(error) {
        throw new Error(error.message)
    }
}

runServer()
