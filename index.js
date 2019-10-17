const express = require("express");
const cors = require("cors");
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const bodyParser = require("body-parser");

const app = express();
const jsonParser = bodyParser.json();
const corsMiddleware = cors();

const port = process.env.PORT || 4000;

// Middleware
app.use(corsMiddleware);
app.use(jsonParser); // USE THESE BEFORE THE ROUTE!
app.use(teamRouter);
app.use(playerRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
