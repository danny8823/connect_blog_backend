import { User,Blog, Comment } from "./db/model/index.js";
import { db } from "./db/db.js";
import dotenv from 'dotenv'
dotenv.config()

export const seed = async () => {
    try {
        await db.authenticate()
        await db.sync({force:true})
        await User.create({
            username:'admin',
            password: process.env.ADMIN_PASS,
            isAdmin: true,
            email: 'admin@email.com'

        });
        await User.create({
            username: 'Danny',
            password: '123',
            isAdmin: false,
            email: 'danny@email.com'
        })
        await Blog.create({
            title: 'Dummy1',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            userId: 2
        })
        await Blog.create({
            title: 'Dummy2',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            userId: 2
        })
        await Blog.create({
            title: 'Dummy3',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            userId: 2
        })
        await Blog.create({
            title: 'Dummy4',
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            userId: 2
        })
        await Comment.create({
            comment: 'This is a test comment1',
            username: 'Danny',
            blogId: 1,
            userId: 2
        })
        await Comment.create({
            comment: 'This is a test comment2',
            username: 'Danny',
            blogId: 2,
            userId: 2
        })
        await Comment.create({
            comment: 'This is a test comment3',
            username: 'Danny',
            blogId: 1,
            userId: 2
        })
        await Comment.create({
            comment: 'This is a test comment3',
            username: 'Admin',
            blogId: 1,
            userId: 1
        })
        console.log('DB connected and synced')
        // db.close()
    } catch (error) {
        throw new Error(error)
    }
}