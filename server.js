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

var tables = [
  {
    name: 'aldo',
    phone: '832.283.2123',
    email: 'myemail@email.com',
    id: '12a123'
  }
];

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/reserve')

app.get('/table')

app.get('/api/tables')

app.get('/api/waitlist')

app.get('/api/clear')
