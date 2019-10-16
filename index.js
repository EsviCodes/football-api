// Import express.
const express = require("express");
const db = require("./db");

// Declare a constant named app and set it to the output of the express function.
const app = express();

// Declare a constant named port equal to the process.env.PORT if it is defined. If it is not defined, use the number 4000, like const port = process.env.PORT || 4000
const port = process.env.PORT || 4000;

// Pass the port and a logging function to app.listen to start the server.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
