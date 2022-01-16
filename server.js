const express = require("express");
const dotenv = require("dotenv").config();

const { PORT } = process.env;
const app = express();

//* ----------- MIDDLEWARE

app.use(express.json());

//* ----------- ROUTES

const foundingFathersRouter = require("./routes/foundingFathers");
app.use("/founding-fathers", foundingFathersRouter);

//* ----------- SERVER START

app.listen(PORT || 3000, () => {
  console.log("Server is running");
});
