import express from "express";
import axios from "axios";

const port = 3000;
const app = express();

app.use(express.static("public"));

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
});

app.get("/",async (req,res)=>{
    try{
        const result = await axios.get(`https://secrets-api.appbrewery.com/random`);
        res.render("index.ejs",{
            secret: result.data.secret,
            user: result.data.username
        });
    }catch(err){
        console.log(err);
    }
});