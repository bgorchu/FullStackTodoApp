var express=require('express'),
		app=express();

var bodyParser=require('body-parser');

app.use(express.static(__dirname+'/views'));
app.use(express.static('public'));



var todoRoutes=require('./routes/todos');

app.use(express.json());

app.use(express.urlencoded({extended: true}))

var db=require("./models");
app.use('/api/todos', todoRoutes);





app.get('/', function(req,res){

	res.sendFile("index.html");

});



app.listen(8081, function(){
	console.log("listening on port 8081");
});