var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type: "application/vnd.api+json"
}));

var reservation = [{
	name: "Brianna",
	number: "9546217111",
	email: "briannadunaj@gmail.com",
	id: "1"

}];

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "index.html"))

});

app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});
