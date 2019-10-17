// Import the Router class from express.
const { Router } = require("express");
const Team = require("../team/model");

// Import the Player model class.
const Player = require("./model");

// Instantiate a router.
const router = new Router();

// TIP: testing the route with res.send('Some message')

router.get("/players", (request, response, next) => {
  Player.findAll()
    .then(player => response.send(player))
    .catch(next);
});

// Create a new player
router.post("/players", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next);
});

// Get a player's information
router.get("/players/:id", (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] })
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
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => {
      if (player) {
        player.update(req.body).then(player => res.json(player));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Add Delete for full REST
router.delete("/players/:id", (req, res, next) => {
  // console.log('WHAT IS REQ.PARAMS before we get wrecked by params', req.params)
  // res.send('Some people want to watch the world burn') // -> route works

  Player.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

// Export the router.
module.exports = router;
