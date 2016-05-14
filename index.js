var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

//app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.send("error");
});

app.post('/highscore', function (request, response) {
    console.log(request);
    //console.log(JSON.parse(request.body));
    response.send("score sent!!");
});

app.get('/highscore', function (request, response) {
    console.log(request.body);
    response.send("score");
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});