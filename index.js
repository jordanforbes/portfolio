var bodyparser = require('body-parser')
var express = require('express')

var pub = __dirname

var app = express()

var portnum = 5000

// setup middleware
app.use(express.static(pub))
app.use('/views', express.static(pub + '/views'));
app.use('/css', express.static(__dirname + '/css'))
app.use('/assets', express.static(pub + '/assets'))

//view engine
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

//index
app.get('/', function(req, res){
	res.render('pages/index')
})

//webapps page
app.get('/apps', function(req, res){
	res.render('pages/webapps')
})



app.use(function(err, req, res, next) {
  res.send(err.stack);
});

if (!module.parent) {
  var port = process.env.PORT || portnum;
  app.listen(port);
  console.log('Express started on port '+ portnum);
}
