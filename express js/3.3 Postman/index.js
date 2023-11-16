import express from "express";
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

app.get("/",(req,res)=>{
    res.send("<h1> hello world </h1>");
});

app.post("/register",(req,res)=>{
  res.sendStatus(201);
});

app.put("/user/asim",(req,res)=>{
  res.sendStatus(200);
});

app.patch("/user/asim",(req,res)=>{
  res.sendStatus(200);
});

app.delete("/user/asim",(req,res)=>{
  res.send(200);
});