var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Setup server
var app = express();
var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var seated = [
  {
    name: 'aldo',
    phone: '832.283.2123',
    email: 'myemail@email.com',
    id: '12a123',
  }
];

var waitlist = [
  {
    name: 'stephen',
    phone: '832.283.2123',
    email: 'myemail@email.com',
    id: '12a123',
  }
]

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/reserve', function(req, res){
  res.sendFile(path.join(__dirname,'reservations.html'));
  
  // console.log('test reserve');
  // res.end('this is a test in reserve');
});

app.get('/app.js', function(req, res){
  res.sendFile(path.join(__dirname, 'app.js'));
})

app.get('/table', function(req, res){
  res.sendFile(path.join(__dirname, 'view_tables.html'));

});

app.get('/api/tables', function(req, res){
  return res.json(seated);
});

app.get('/api/waitlist', function(req, res){
  return res.json(waitlist);
});

app.delete('/api/clear', function(req, res){
  waitlist.length = 0;
  seated.length = 0;
  res.end();
})

app.post('/api/tables', function(req, res){
  var newReservation = req.body;  
  if(seated.length > 5){
    waitlist.push(newReservation);
  }
  else{
    seated.push(newReservation);
  };
  console.log('we posted!');
  res.end('whats up');
});

app.listen(PORT, function(){
  console.log('app listening on PORT: ' + PORT); 
})
