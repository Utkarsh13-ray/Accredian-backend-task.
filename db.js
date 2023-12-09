const mongoose=require('mongoose');


const mongoURI="mongodb+srv://Utkarsh:utkarshp1@cluster0.qiwksar.mongodb.net/Userbook?retryWrites=true&w=majority"


const connectToMongo=()=>{
    try{
        mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully");
    })}
    catch(error){
        console.log(error)
        process.exit()
    }
}

module.exports=connectToMongo;
