const mongoose=require('mongoose')

async function dbConnect(){
    await mongoose.connect('mongodb+srv://San:Sanjay188@cluster0.veagh3u.mongodb.net/myPostMe')
    console.log("Database connected successfully")
}

module.exports=dbConnect