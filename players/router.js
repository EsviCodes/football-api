// Import the Router class from express.
const { Router } = require("express");

// Import the Player model class.
const Players = require("./model");

// Instantiate a router.
const router = new Router();

// TIP: testing the route with res.send('Some message')

router.get("/players", (request, response, next) => {
  Players.findAll()
    .then(player => response.send(player))
    //.catch(error => next(error)); --> wrong call next right away
    .catch(next);
});

// Create a new player
router.post("/players", (req, res, next) => {
  Players.create(req.body)
    .then(player => res.json(player))
    .catch(next);
});

// Get a player's information
router.get("/players/:id", (req, res, next) => {
  Players.findByPk(req.params.id)
    .then(player => {
      if (!player) {
        res.status(404).end();
      } else {
        res.json(player);
      }
    })
    .catch(next);
});

// Update a player's information
router.put("/players/:id", (req, res, next) => {
  Players.findByPk(req.params.id)
    .then(player => {
      if (player) {
        Players.update(req.body).then(player => res.json(player));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Add Delete for full REST

// Export the router.
module.exports = router;
