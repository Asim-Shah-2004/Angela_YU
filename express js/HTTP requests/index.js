import express from "express";
const app = express();
const port = 3100;


app.get("/about",(req,res)=>{
    res.send("i have become death the destroyer of worlds");
});

app.get("/contact",(req,res)=>{
    res.send("my contact info is 9372237733");
});


app.get("/",(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1><em>hello world</em></h1>");
});


app.listen(port,()=>{
    console.log(`the server is running on port no ${port}`);
});