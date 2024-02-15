const mongoose=require("mongoose")

const dataSchema=mongoose.Schema({
    Poster:String,
    Title:String,
    Type:String,
    Year:Number

},{
    versionKey:false
})

const DataModel=mongoose.model("data", dataSchema)

module.exports={DataModel}