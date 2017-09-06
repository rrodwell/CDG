var express = require("express"),
    bodyParser = require("body-parser");

var app = express();
var PORT =  process.env.PORT || 8080;

// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/routes.js");
app.use("/", routes);

app.use(express.static("./public"));

app.listen(PORT, function(){
    console.log('App listening on port ' + PORT)
});
