
//The password is ILoveProgramming
import express from "express";
import {dirname}  from "path";
import  {fileURLToPath}  from "url";
import bodyParser from "body-parser";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,()=>{
    console.log(`the server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
});

app.post("/check",(req,res)=>{
    let password = req.body.password;
    if(password==="ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");
    }else{
        res.sendFile(__dirname+"/public/index.html");
    }
});
