import  dotenv from  'dotenv'
dotenv.config()
import  http  from  'http'
import  app from "./app.js"
import connectDB from './config/db.js'
const PORT  = process.env.PORT || 3000
const  server  =  http.createServer(app)
connectDB()


server.listen(PORT ,  () =>{
    console.log(`Server is Runing on PORT ${PORT}`)
})




