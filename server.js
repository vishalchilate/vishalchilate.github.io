var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

var api = require('./app/routes/api')(app, express, io);
app.use('/api', api);


app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/app/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('broadcast_states', function(data) {
    io.emit('broadcast_states', data);
  });
});

http.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
});
