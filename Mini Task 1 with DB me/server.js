const dns = require('dns')

dns.setServers(['1.1.1.1', '1.0.0.1'])

const app=require('./src/app')
const connectDB=require('./src/db/db')

async function startServer(){
    try{
        await connectDB()
        app.listen(3000, ()=>{
            console.log('Server is running on port 3000')
        })
    }
    catch(error){
        console.log("Database connection failed:", error.message)
    }
}

startServer()