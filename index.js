const express = require("express");
const bodyParser = require("body-parser");

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const usersRouters = require("./src/routes/rt-users");
const loginRouters = require("./src/routes/rt-login");
const styleRouters = require("./src/routes/rt-style");

const app = express();
const PORT = process.env.PORT || 4000; // port để sử dụng
// const isProduction = process.env.NODE_ENV === "production";
const importData = [
  {
    id: 1,
    name: "Duc",
  },
];
app.use(helmet());

app.use(morgan("tiny"));
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Router của Controller App

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.send("Hello from Homepage");
  });
}
// Router Default
app.use("/users/v1", usersRouters);
app.use("/login/v1", loginRouters);
app.use("/style-option/v1", styleRouters);

app.get("/player", (req, res) => {
  res.send(importData);
});
// Đang Listen trên port nào.
app.listen(PORT, () =>
  console.log(`Server runing mon port: http://localhost:${PORT}`)
);
