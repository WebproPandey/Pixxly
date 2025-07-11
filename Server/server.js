import  dotenv from  'dotenv'
dotenv.config()
import  http  from  'http'
import  app from "./app.js"
import { initSocket } from './socket/socket.js';
import connectDB from './config/db.js'
const PORT  = process.env.PORT || 3000

const  server  =  http.createServer(app)
const io = initSocket(server);
connectDB()


app.set('io', io);

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



