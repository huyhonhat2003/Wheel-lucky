import express from "express";
// import cors from 'cors';
import bodyParser from "body-parser";
import userRoute from "./routers/user.js";
import connect from "./connect.js";
import cors from "cors";
import { connect } from 'react-redux';

const app = express();
app.use(cors());
// app.use(cros())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use("/user", userRoute);
connect
  .then(() => {
    app.listen(3300, () => {
      console.log("database is connected");
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
