import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "abcde@12345";
const yourPassword = "123456789";
const yourAPIKey = "fda16a68-3061-41f5-a746-2a8161427022";
const yourBearerToken = "0afcd6ed-6f3b-4db9-a598-b200942cd895";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
    try{
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs",{content : JSON.stringify(result.data)});
    }catch(err){
        console.log(err);
    }
});

app.get("/basicAuth", async (req, res) => {
  try{
      const result = await axios.get("https://secrets-api.appbrewery.com/all?page=2",{
          auth:{
            username: yourUsername,
            password : yourPassword
          }
      });
      res.render("index.ejs",{content: JSON.stringify(result.data)});
  }catch(err){
      console.log(err);
  }
 
 
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {

  try{
      const result = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`);
      res.render("index.ejs",{content:JSON.stringify(result.data)});
  }catch(err){
    console.log(err);
  }
});

app.get("/bearerToken", async(req, res) => {
    try{  
        const result = await axios.get(`https://secrets-api.appbrewery.com/secrets/1`,{
          headers: { 
            Authorization: `Bearer ${yourBearerToken}` 
          },
        });
        res.render("index.ejs",{content:JSON.stringify(result.data)});
    }catch(err){
      console.log(err);
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
