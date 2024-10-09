const Agent = require("../models/agents");

// to create agent
const createAgent=async(req,res)=>{
    try{
    const{name,email,phone,companyId}=req.body
    if (!name || !email) {
        return res.status(400).json({ error: 'name and email fields are required' });
    }
    const agent = new Agent({name,email,phone,companyId});
    await agent.save();

    const savedAgent=await Agent.findById(agent._id).select("-__v")
    res.status(201).json(savedAgent)
    }
    
    catch(error){
    res.status(400).json({message:"Error creting user",error})
    }
}


module.exports=createAgent