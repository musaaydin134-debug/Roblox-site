const express = require("express");
const fetch = require("node-fetch");
const app = express();

const TOKEN = "8686662705:AAGI8auxzNfsKby7agLDkFI5t9XHlSxGj2E";
const CHAT_ID = "8063801914";

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname));

app.post("/gonder", async (req,res)=>{
  const mesaj = req.body.mesaj;

  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: mesaj
    })
  });

  res.redirect("/");
});

app.listen(3000);
