const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const mainRouter = require("./Routes/main");
const productsRouter = require("./Routes/products");
const usersRouter = require("./Routes/users");
//======== API =========
const apiUsersRouter = require("./Routes/apis/users");
const apiProductRouter = require("./Routes/apis/products");
const { cookie } = require("express-validator");

app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "../public")));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
//Utilizacion de Session 
app.use(
  session({
    secret: "Es un secreto",
    resave: false,
    saveUninitialized: true,
  })
);

//Utilizacion de Cookies 
app.use (cookieParser()); 

app.listen(3001, () => {
  console.log("Puerto 3001 Activo");
});

app.use("/", mainRouter);

app.use("/users", usersRouter);

app.use("/products", productsRouter);

//APIS
app.use("/api", apiUsersRouter);
app.use("/api", apiProductRouter);
