require('dotenv').config({path: "./.env"});
const express = require("express");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const cors = require("cors");
const app = express();

const User = require("./models/model").User;
const userRoutes = require("./routes/user-routes");
const todoRoutes = require("./routes/todo-routes");

require("./authentication/auth");
require("./database/connection");

app.use(express.json());
app.use(session({
  secret: "The secret string for cookie level",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

// app.use(express.static("../client/public"));
// const path = require("path");
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname,"../client/public","index.html"));
// });

// app.use(cors({
//   origin: "http://localhost:3000/"
// }));

app.use("/users", userRoutes);
app.use("/todo", todoRoutes);

app.listen(4000, () => {
    console.log("Server started on port 4000");
});
