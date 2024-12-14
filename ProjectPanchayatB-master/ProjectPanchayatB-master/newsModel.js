const Mongoose=require("mongoose")
const newsModel=Mongoose.model("news",Mongoose.Schema({

    news:String 
    
}))

module.exports={newsModel}

