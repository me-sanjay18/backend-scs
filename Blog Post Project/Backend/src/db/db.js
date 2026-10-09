const mongoose=require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://San:Sanjay188@cluster0.veagh3u.mongodb.net/postProject')
    
    console.log('Database connected successfully')
}

module.exports=connectDB