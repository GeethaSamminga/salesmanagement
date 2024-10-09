const express=require("express")
const createSale = require("../controllers/sale");
const router=express.Router()

router.post("/",createSale);

module.exports=router