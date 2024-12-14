const Mongoose=require("mongoose")
const requestModel=Mongoose.model("newrequests",Mongoose.Schema({

   requestname:String,
   vid:String,
   facilitytype:String,
   userequest:String,
   status:String


}))

module.exports={requestModel}