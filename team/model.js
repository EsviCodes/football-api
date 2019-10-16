// Import Sequelize.
const Sequelize = require("sequelize");

// Import db.js as a constant named db.
const db = require("../db");

// Declare a constant named Team. Capitalize the variable because it will be a class.
// Set the variable equal to a call to db.define.
// The first argument to define is the model name. Call it 'team'.
// The second argument is an object that defines the table's fields. Add one string field called name and give it the type Sequelize.STRING.
const Team = db.define("team", {
  // attributes
  name: Sequelize.STRING
});

// Export the model.
module.exports = Team;
