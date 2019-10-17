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

// Register a POST endpoint for teams in team/router.js. The route should listen for POST requests on the /team route. Pass the request's body to Team.create, which sequelize will use to populate the row's fields.
// Add a then callback that sends the newly created team as a the response. Add a catch callback where you pass any caught errors to next.

// Create a new team
router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next);
});

// Get a team's information
router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (!team) {
        res.status(404).end();
      } else {
        res.json(team);
      }
    })
    .catch(next);
});

// Update a team's information
router.put("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (team) {
        team.update(req.body).then(team => res.json(team));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Export the router.
module.exports = router;
