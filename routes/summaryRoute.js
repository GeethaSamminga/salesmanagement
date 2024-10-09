 const express=require("express")
const getSalesSummary = require("../controllers/salesummary")

 const router=express.Router()

 router.get("/agent/:agent_email",getSalesSummary)

 module.exports=router