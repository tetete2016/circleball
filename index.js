var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var scores = [];

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function ScoreData(name, score) {
    this.name = name;
    this.score = score;
}

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send("error");
});

app.post('/highscore', function (request, response) {
    console.log(request.body);
    if (request.body.name != null && request.body.score != null) {
        scores.push(new ScoreData(request.body.name, request.body.score));
    }
    console.log(scores);
    response.send("");
});

app.get('/highscore', function (request, response) {
    console.log(request.body);
    var str = "{";
    str += '"name":[';
    for (var i = 0; i < scores.length; i++) {
        str += scores[i].name;
    }
    str += "] ,";

    str += '"score":[';
    for (var i = 0; i < scores.length; i++) {
        str += '"' + scores[i].score + '"';
        if (i < scores.length - 1) {
            str += ",";
        }
    }
    str += "]";
    str += "}";
    response.send(str);
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});