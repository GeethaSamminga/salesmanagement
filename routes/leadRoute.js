const express=require("express")
const createLead = require("../controllers/lead")
const router=express.Router()

router.post("/",createLead)

module.exports=router