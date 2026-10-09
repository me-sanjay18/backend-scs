const dns = require('dns')

dns.setServers(['1.1.1.1', '1.0.0.1'])

const app = require('./src/app')
const connectDB = require('./src/db/db')

async function startServer() {
    try {
        await connectDB()
        app.listen(4000, () => {
            console.log("Server is running on port no. 4000")
        })
    } catch (error) {
        console.log("Database connection failed:", error.message)
    }
}

startServer()