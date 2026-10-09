const express=require('express')
const postModel=require('./Model/post.model')

const multer=require('multer')


const app=express()
app.use(express.json())

const upload=multer({storage: multer.memoryStorage()})


app.post('/create-post', upload.single("image"), async (req, res)=>{
    const data=req.body
    console.log(data)
    console.log(req.file)
    // const post=postModel.create({
    //     image:data.image,
    //     caption:data.caption
    // })

    res.status(201).json({
        message:'Post created successfully',
        // post:post
    })
})


module.exports=app