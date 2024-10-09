const mongoose=require("mongoose")

const leadSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    city:{
        type:String
    },
   state:{
    type:String
   },
   country:{
    type:String
   },
   pinCode:{
    type:String
   },
   agentEmail:{
    type:String,
    ref:"Agent",
    required:true,
   },
   
    productsSold:[{
        productId:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"product"
        },
     date:{
        type:Date,
        default:Date.now()
     }
   }]
})

const Lead= mongoose.model("Lead",leadSchema)

module.exports= Lead