var express = require('express');
var app = express.createServer(express.logger());
var path = require('path');
var jade = require('jade');
var everyone = require('now').initialize(app);

app.configure(function(){
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.set('view options');
  var oneYear = 31557600000;
  app.use("/", express.static(__dirname + '/public'));
});

app.get('/', function(request, response) {
  everyone.now.msg = "Hello Yada Mark and Dan!!";
  response.render('index', {
      locals: {some: 'Locals'}
  });
});

everyone.now.distributeMessage = function(message){
  everyone.now.receiveMessage(this.now.name, message);
};

var port = process.env.PORT || 3000;
console.log("Listening on " + port);

app.listen(port);
