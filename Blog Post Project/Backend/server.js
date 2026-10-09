const dns = require('dns')

dns.setServers(['1.1.1.1', '1.0.0.1'])

require('dotenv').config()

const app=require('./src/app')
const connectDB=require('./src/db/db')

async function startServer(){
    try{
        await connectDB()
        app.listen(4000,()=>{
            console.log("server is running on port 4000")
        })
    }
    catch(error){
        console.error('Database connection failed', error.message)
    }
}

startServer()