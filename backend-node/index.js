const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { DataModel } = require("./data.model")

const app=express()

app.use(express.json())
app.use(cors())

app.post("/add-data", async(req,res)=>{
    let payload=req.body
    try{
        let data=new DataModel(payload)
        await data.save()
        res.status(200).send({msg:"Data Added Success"})

    }catch(err){
        res.status(500).send({err:"Something went wrong"})
    }
})

app.get("/get-data", async(req, res)=>{
    try{
        let data=await DataModel.find({})
        res.status(200).send(data)

    }catch(err){
        res.status(500).send({err:"Something went wrong"})
    }
})

app.listen(8080, async()=>{
    try{
        await connection
        console.log("database connected")

    }catch(err){
        console.log(err)
        console.log("database not connected")
    }
})