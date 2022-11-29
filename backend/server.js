import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app=express();
const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/register",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("Database Connected")
})

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const User = new mongoose.model("User",userSchema)


app.post('/login',(req,res)=>{
    
    const {email,pass} = req.body;
    console.log(req.body)
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(pass===user.pass){
                res.send({message:"Login Successful",user})
            }
            else{
                res.send({message:"Wrong Password"})
            }
        }
        else{
            res.send({message:"User Not registered"})
        }
    })
})

app.post('/register',(req,res)=>{

    const {name, email, pass} = req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }
        else {
            const user= new User({
                name,
                email,
                pass
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({mesage:"Sucessfuly registered"})
                }
            })
        }
    })

    console.log(req.body)
})

app.get('/',(req,res)=>{
    res.send(`Hello from HomePage`);
});

app.get('/data',(req,res)=>{
    res.send(`Hello World`);
});


app.listen(PORT,()=>{
    console.log(`Server listening at ${PORT}`)
})