const express=require("express");
const createAgent = require("../controllers/agent");
const router=express.Router();

router.post("/",createAgent)

module.exports=router;