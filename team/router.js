// Import the Router class from express.
const { Router } = require("express");

// Import the Team model class.
const Team = require("./model");

// Instantiate a router.
const router = new Router();

// Register a GET endpoint on the '/team' route. This route will get all the team rows from the table.
// The route handler should take three arguments: the request (or req), the response (or res), and the next function.
// Inside the route handler:
// Call the Team.findAll method.
// Add a then callback. It will receive the list of teams. Send the list as the response.
// Add a catch callback. It will receive an error if it is thrown. Pass it to next.
router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(team => response.send(team))
    //.catch(error => next(error)); --> wrong call next right away
    .catch(next);
});

// Export the router.
module.exports = router;
