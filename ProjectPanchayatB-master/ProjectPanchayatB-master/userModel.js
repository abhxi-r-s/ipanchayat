const Mongoose=require("mongoose")
const userModel=Mongoose.model("usersignups",Mongoose.Schema({
    name:String,
    ward:String,
    address:String,
    voterid:String,
    password:String
}))

module.exports={userModel}


