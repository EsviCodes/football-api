// Import express.
const express = require("express");
// const db = require("./db");
const Team = require("./team/model"); // team wasn't defined without this one, even though we use it in teamRouter
const teamRouter = require("./team/router");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

// Declare a constant named app and set it to the output of the express function.
const app = express();

// Declare a constant named port equal to the process.env.PORT if it is defined. If it is not defined, use the number 4000, like const port = process.env.PORT || 4000
const port = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(teamRouter);
app.use(jsonParser);

// Pass the port and a logging function to app.listen to start the server.
app.post("/team", (req, res, next) => {
  Team.create(req.body)
    //.then(team => res.json({ name: team }))// doesn't work -- object with null as response
    .then(team => res.json(team)) // doesn't work -- object with null as response
    .catch(next);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

/* 
You can also do:
app
.use(//)
.listen(//)
*/
