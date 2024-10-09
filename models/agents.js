const mongoose=require("mongoose")

const agentSchema=new mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
email:{
    type:String,
    required:true,
    unique:true
},
phone:{
    type:String,
    required:String
},
companyID:{
    type:String
}
})

const Agent=mongoose.model("Agent",agentSchema)

module.exports=Agent
