// Import Sequelize & Team
const Sequelize = require("sequelize");
const Team = require("../team/model");

// Import db.js as a constant named db.
const db = require("../db");

const Player = db.define("player", {
  // attributes
  name: Sequelize.STRING,
  number: Sequelize.INTEGER
});

//Tell Sequelize that a Player belongs to a Team by adding this line below your Player model definition:
Player.belongsTo(Team);
// ADD Team.hasmany(Player) --> should be in here but I haven't applied this yet

module.exports = Player;
