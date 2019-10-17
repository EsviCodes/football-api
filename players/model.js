// Import Sequelize & Team
const Sequelize = require("sequelize");
const Teams = require("../teams/model");

// Import db.js as a constant named db.
const db = require("../db");

const Players = db.define("player", {
  // attributes
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

//Tell Sequelize that a Player belongs to a Team by adding this line below your Player model definition:
Players.belongsTo(Teams);

module.exports = Players;
