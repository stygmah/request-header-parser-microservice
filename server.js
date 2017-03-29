const express = require('express');
const bodyParser = require('body-parser');


const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  var result = {
    ipadress:req.headers['user-agent'],
    language:req.headers['accept-language'],
    software:req.headers['x-forwarded-for']
  }
  
  result.language = result.language.substring(0, result.language.indexOf(','));
  
  //send the response
  res.send(result);
});



app.listen(port, ()=>{
  console.log('server listening on port ',port);
});
  
