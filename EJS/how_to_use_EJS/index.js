import express  from "express";
import {dirname}  from "path";
import  {fileURLToPath}  from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

function day(){
    const d = new Date();
    let day = d.getDay();
    if(day===6||day===0){
        return "weekend";
    }else{
        return "weekday";
    }
}

app.listen(port,()=>{
    console.log("server is running");
});

app.get("/",(req,res)=>{
    let message;
    if(day()=="weekday"){
        message = "weekday hai boor hoga";
    }else{
        message = "weeknd haiiii!!!!!!!!!!!!!!!!";
    }

    res.render("index.ejs",{
        dayType: day(),
        message: message,
    });

});
