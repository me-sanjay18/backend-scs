const express = require('express')
const multer = require('multer')
const UploadFile = require('./services/storage.services')
const postModel = require('./model/post.model')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

const upload = multer({
    storage: multer.memoryStorage()
})

// Create Post
app.post('/create-post', upload.single('image'), async (req, res) => {

    const result = await UploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post Created Successfully",
        post: post
    })
})

// Read Post
app.get('/posts', async (req, res) => {

    const posts = await postModel.find()

    res.status(200).json({
        message: "Posts Fetched Successfully",
        posts: posts
    })
})

module.exports = app