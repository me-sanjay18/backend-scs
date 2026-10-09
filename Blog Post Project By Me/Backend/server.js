const dns=require('dns')
const app=require('./src/app')
const connectDb=require('./src/DB/db')

dns.setServers(['1.1.1.1', '1.0.0.1'])

async function startServer(){
    await connectDb()
    app.listen(3000, ()=>{
        console.log('Server is running on port 3000')
    })
}

startServer()