const Mongoose=require("mongoose")
const adminmodel=Mongoose.model("administrators",Mongoose.Schema({

    adminname:String,
    adminaddress:String,
    adminvoterid:String,
    adminposition:String,
    adminpassword:String

}))

module.exports={adminmodel}