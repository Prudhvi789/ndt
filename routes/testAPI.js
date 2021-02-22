var express = require("express");
var router = express.Router();
const mongodb = require("mongodb");

//const port = process.env.PORT || 5000

const mongoClient = mongodb.MongoClient

const uri = "mongodb+srv://Prudhvi:prudhvidbs@cluster0.fztff.mongodb.net/<dbname>?retryWrites=true&w=majority";

router.get("/",async (req,res)=>{
    try{
        let client = await mongoClient.connect(uri);
        let db = client.db("zen");
        let students = await db.collection("products").find().toArray();
        client.close();
        res.status(200).json(students);
    }
    catch(err){
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;