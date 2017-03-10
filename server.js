var express = require('express');
var path = require('path');
var compression = require('compression');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(compression());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist'), {index: false}))


app.get('*', (req, res) => {

 res.sendFile(path.join(__dirname + '/dist/index.html'));
})



var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})