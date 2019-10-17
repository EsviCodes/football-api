const Sequelize = require("sequelize");

//  since the database runs on your local machine, the password is not sensitive information.
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:football@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

//db.sync({ force: true }) --> use if want to delete db on heroku. Deploy again
db.sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = db;
