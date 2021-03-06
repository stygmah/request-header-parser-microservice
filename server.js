const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  
  var result = {
    ipaddress:req.headers['x-forwarded-for'],
    language:req.headers['accept-language'],
    software:req.headers['user-agent']
  }
  
  result.language = result.language.substring(0, result.language.indexOf(','));
  result.software = result.software.substring(result.software.indexOf('(')+1, result.software.indexOf(')'));
  
  //send the response
  res.send(result);
});



app.listen(port, ()=>{
  console.log('server listening on port ',port);
});
  
