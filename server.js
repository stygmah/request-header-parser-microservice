const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  // var result = {
  //   ipadress:req,
  //   language:req,
  //   software:req
  // }
  console.log(req);
  //send the response
  res.send("HELO");
});



app.listen(port, ()=>{
  console.log('server listening on port ',port);
});
  
