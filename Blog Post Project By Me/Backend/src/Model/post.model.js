const mongoose=require('mongoose')

const postSchema=mongoose.Schema({
    image:String,
    caption:String
})

postModel=mongoose.model('myPost', postSchema)

module.exports=postModel