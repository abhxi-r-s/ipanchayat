const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Express=require("express")


const{userModel}=require("./userModel")
const{adminmodel}=require("./adminmodel")
const{newsModel}=require("./newsModel")
const { requestModel } = require("./requestModel")

const app=Express()

app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

Mongoose.connect("mongodb+srv://Abhishek:abhishek123@cluster0.2kwt6.mongodb.net/PanchayatDB?retryWrites=true&w=majority")

app.post("/us",async (req,res)=>{
    const data=req.body
    const ob=new userModel(data)
    ob.save((error,data)=>{
        if(error)
        {
          res.send("error occured")
        }
        else
        {
          res.send(data)
        }
    })
})

app.post("/as",async (req,res)=>{
  console.log(req.body)
    const data1=req.body
    const ob=new adminmodel(data1)
    ob.save((error,data1)=>{
        if(error)
        {
           res.send("error occured")
        }
        else
        {
          res.send(data1)
        }

    })
})

app.post("/alogin", async(req, res) => {
  console.log(req.body)
  const request = req.body
  adminmodel.findOne({adminname: request.adminname}, (err,data1) => {
    if(data1){
      if (data1.adminpassword == request.adminpassword) {
        res.send({"success": true, data1: data1 });
      }else {
        res.send({"success": "Invalid username or password!"});
      }
    } else {
      res.send({ "success": "No user found"});
    }
  })
})

app.post("/ulogin", async(req, res) => {
  const request = req.body
  userModel.findOne({name: request.name}, (err,data) => {
    if(data){
      if (data.password == request.password) {
        res.send({"success": true, data: data });
      }else {
        res.send({"success": "Invalid username or password!"});
      }
    } else {
      res.send({ "success": "No user found"});
    }
  })
})


app.post("/n",async (req,res)=>{
    const datan=req.body
    const ob=new newsModel(datan)
    ob.save((error,datan)=>{
       if(error)
       {
         res.send("error occured")
       }
       else
       {
         res.send(datan)
       }
    })
})

app.post("/sq",async (req,res)=>{
    const data1=req.body
    data1.status="null"
    const ob=new requestModel(data1)
    ob.save((error,data1)=>{
      if(error)
      {
        res.send("error occured")
      }
      else
      {
        res.send(data1)
      }
    })
})
app.post("/viewvid",async (req,res)=>{

  console.log(req.body.data.voterid)
  requestModel.find({vid:req.body.data.voterid},
     (error,data1)=>{
      if(error)
      {
        res.send("error occured")
      }
      else
      {
        console.log(data1)
        res.send(data1)
      }
    }) 
  
})

app.put("/approveview/:id",async(req,res)=>{
  console.log(req.params.id)
  const id = req.params.id,
  status="Approved"
  requestModel.findByIdAndUpdate({"_id":id},
  {$set:{"status":status
}}).then(function(){
  requestModel.find(
      (error,data)=>{
          if(error){
              res.send(error)
              
          }
          else{
              res.status(200).json({
                  msg:data
                 
              })
              console.log(data)
          }
      }
  )})
    })

    app.delete('/deleteview/:id',function(req,res){
      const id = req.params.id;
      requestModel.findByIdAndDelete(id,(error,data)=>{
         if(error){
          res.send(error)
         }else{
          res.status(200).json({
              msg:data
          })
         }
      })
  })    

  app.delete('/deluser/:id',function(req,res){
    const id = req.params.id;
    userModel.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})    

app.get("/requestview",async(req,res)=>{
  requestModel.find((error,data)=>{
          if(error){
              res.send(error)
          }
          else{
              res.send(data)
            }
      })
    })

app.get("/userview",async(req,res)=>{
  userModel.find((error,data)=>{
          if(error){
              res.send(error)
          }
          else{
              res.send(data)
            }
      })
    })

app.get("/newsview",async(req,res)=>{
  newsModel.find((error,data2)=>{
           if(error){
               res.send(error)
           }
           else{
             res.send(data2)
           }
  })
})

app.listen(3000,()=>{console.log("Server running at http://localhost:3000")})