const dotenv=require("dotenv")
const connectDB = require("./data/database");
const app = require("./app");

dotenv.config({path:"./data/config.env"})

connectDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})