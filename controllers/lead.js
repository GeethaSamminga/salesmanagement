const Agent = require("../models/agents")
const Lead=require("../models/leads")

const createLead=async(req,res)=>{
    try{
    const{name,email,phoneNumber,age,city,state,country,pinCode,agentEmail}=req.body
    const agent=await Agent.findOne({email:agentEmail})

    if(!agent){
        return res.status(404).json({message:"Agent not found"})
    }
   
    const existingLead=await Lead.findOne({email:email})
    if(existingLead){
        return res.status(400).json({message:"lead already exist"})
    }
    
    const lead=new Lead({name,email,phoneNumber,age,city,state,country,pinCode,agentEmail:agent.email})
    await lead.save()

    const savedLead= await Lead.findById(lead._id).select("-__v")
    res.status(201).json(savedLead)
    }

catch(error){
    res.status(400).json({ error: error.message });
}
}



module.exports=createLead;