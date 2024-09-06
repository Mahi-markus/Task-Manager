const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//const notfound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middlewere
app.use(express.json());
app.use(express.static("./public"));
//app.use(notfound);
app.use(errorHandlerMiddleware);

//routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is running ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();
