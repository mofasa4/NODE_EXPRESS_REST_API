import express from "express";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  console.log("Hello fr4om the other side");
  res.send("hello dexter");
});

app.listen(port, () =>
  console.log(`Server is running on port: http://localhost:${port}`)
);
