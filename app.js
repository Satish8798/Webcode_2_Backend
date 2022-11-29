const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./databaseConnection");
const userRouter = require("./Routers/userRouter");
const cors = require("cors");

dotenv.config();

const app = express();

dbConnection.connectMongoose();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("server running on port : " + process.env.PORT);
});
