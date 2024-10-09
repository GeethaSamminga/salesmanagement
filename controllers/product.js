const Product = require("../models/products");

const createProducts=async(req,res)=>{
    try{
        const {name,price,image,description}=req.body

        if(!name||!price){
            return res.status(400).json({ error: 'name and price fields are required' });
        }
    
        const product= new Product({name,price,image,description})
        await product.save();
    
        const savedproduct= await Product.findById(product._id).select('-__v')
        res.status(201).json(savedproduct)
    }
  catch(error){
    res.status(400).json({ error: error.message });
  }
}
module.exports=createProducts