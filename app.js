const express=require("express")
const app=express()

app.use(express.json());

const agentRoutes=require("./routes/agentRoute")
const productRoutes=require("./routes/productRoute")
const leadRoutes=require("./routes/leadRoute")
const saleRoutes=require("./routes/saleRoute")
const summaryRoutes=require("./routes/summaryRoute")

app.use("/api/agents",agentRoutes)
app.use("/api/products",productRoutes)
app.use("/api/leads",leadRoutes)
app.use("/api/sales",saleRoutes)
app.use("/api",summaryRoutes)

app.get("/",(req,res)=>{
    res.send("welcome to sales management")
})
module.exports=app;