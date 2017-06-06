var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var fs = require("fs");
var app = express();
var compiler = webpack(config);
var bodyParser = require('body-parser');
console.log("bodyParser");
console.log(bodyParser);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname))

app.get('/', function(req, res) {
   console.log("inside serving request");
 debugger;
  res.sendFile(path.join(__dirname, '/index.html'));
});
// create application/json parser 
// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/listproducts',urlencodedParser , function (req, res) {
console.log("this is request");
  console.log(req.body);
   fs.readFile( __dirname + "/" + "sample.json", 'utf8', function (err, data) {
      console.log("inside Rest prooducts");
       
      

      if(req.body.searchString&&req.body.searchString!==''){
        data= JSON.parse(data.toString( )); 
        data=data.products.filter((element)=>element.itemTitle.toLowerCase().includes(req.body.searchString.toLowerCase()));
        data={
          "products": data
        };
        
      }

        if(req.body.searchFilter&&req.body.searchFilter!==''){
        data= (typeof data === 'string') ? JSON.parse(data.toString()) : data; 
        data=data.products.filter((element)=>(Math.floor(Math.random()*data.products.length)) % 2===0);
        data={
          "products": data
        };
        
      }

       console.log(data);
       res.end( JSON.stringify(data));
   });
})

app.listen(8080, 'localhost', function(err) {
  if (err) {
    console.log("printing error::::::::::");
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
