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
	"name": "Brianna",
	"number": "9546217111",
	"email": "briannadunaj@gmail.com",
	"id": "1"

}];

//html routes
// sets up pathing to html file
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "assets/html/index.html"));

});

app.get("/reserve", function(req, res){
	res.sendFile(path.join(__dirname, "assets/html/reserve.html"));
});

app.get("/table", function(req, res){
	res.sendFile(path.join(__dirname, "assets/html/table.html"));
});

//api routes
// show all reservations
app.get("/api/tables", function(req, res){

	return res.json(reservations);

});

// create new reservations
app.post("/api/reserve", function(req, res){

	//save json post sent from user 
	var newreservation = req.body;
	console.log(newreservation);

	//add the json the user sent to the reservation array
	reservations.push(newreservation);

	//display the json to the users
	res.json(newreservation);

//	var waitlist = [];

//	if (reservations.length > 5){
//		waitlist.push(newreservation);
//	};


});

//app.get("/api/waitlists", function(req, res){
//	waitlist;
//});


//starts the server to begin listening
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT);
});


