// Import Sequelize.
const Sequelize = require("sequelize");

// Import db.js as a constant named db.
const db = require("../db");

const Player = db.define("player", {
  // attributes
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

module.exports = Player;
