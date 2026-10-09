const mongoose=require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://San:Sanjay188@cluster0.veagh3u.mongodb.net/myNotes')

    console.log('Databsce Connected Successfully')
}

module.exports=connectDB