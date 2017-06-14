var bodyparser = require('body-parser')
var express = require('express')

var engine = require('ejs-layout');

var pub = __dirname

var app = express()

var portnum = 9000

// setup middleware
app.use(express.static(pub))
app.use('/views', express.static(pub + '/views'));
app.use('/public', express.static(pub + '/public'));
app.use('/scss', express.static(pub + '/scss'))
app.use('/assets', express.static(pub + '/assets'))

//view engine
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile)
app.engine('ejs', engine.__express)

//index
app.get('/', function(req, res){
	res.render('newindex')
})

//webapps page
app.get('/apps', function(req, res){
	res.render('pages/apps')
})

//about
app.get('/about', function(req, res){
	res.render('pages/about')
})

//contact
app.get('/contact', function(req, res){
	res.render('pages/contact')
})

//skills
app.get('/skills', function(req, res){
	res.render('pages/skills')
})



app.use(function(err, req, res, next) {
  res.send(err.stack);
});

if (!module.parent) {
  var port = process.env.PORT || portnum;
  app.listen(port);
  console.log('Express started on port '+ portnum);
}
