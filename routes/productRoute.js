const express=require("express");
const createProducts = require("../controllers/product");

const router=express.Router();

router.post("/",createProducts)

module.exports=router;