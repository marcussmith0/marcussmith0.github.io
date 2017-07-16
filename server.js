const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3020;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" })); 

app.use(express.static("public"));


require("./site/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("Server is listening on port: " + PORT);
})
