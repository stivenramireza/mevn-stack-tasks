const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hello world!');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Listening port http://localhost:' + app.get('port'));
})