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

var reservations = [{
	name: "Brianna",
	number: "9546217111",
	email: "briannadunaj@gmail.com",
	id: "1"

}];

// sets up pathing to html file
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "/assets/html/index.html"))

});

// create new reservations
app.post("/api/new", function(req, res){

	//save json post sent from user 
	var newreservation = req.body;
	console.log(newreservation);

	//add the json the user sent to the reservation array
	reservations.push(newreservation);

	//display the json to the users
	res.json(newreservation);

});


//starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});


//PSEUDO CODE
// store data from user input








