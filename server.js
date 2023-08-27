import express from 'express'
import dotenv from 'dotenv'
import { db } from './db/db.js'
import routers from './routes/index.js'
import { seed } from './seed.js'
import cors from 'cors'

const port = process.env.PORT
const server = express()
const allowedOrigins = ['https://connectblog-com.preview-domain.com'];

// server.use(cors({
//     origin: function (origin, callback) {
//         if (allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
// }));

server.use(cors())

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
