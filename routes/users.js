import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

let users = [];
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.unshift({ ...user, id: uuidv4() });
  res.send(` user with name ${user.firstName} is added successfuly`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === id);
  res.send(findUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with the ${id} is deleted from the database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }
  res.send(`user with the ${id} is updated`);
});
export default router;
