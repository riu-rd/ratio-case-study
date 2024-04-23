import express from "express";
import { PORT, DATA } from "./config.js";

const app = express();
app.use(express.json())

// Allow access to Physical Expo App
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// For Testing Purposes
app.get("/", (req, res) => {
  return res.status(200).send("Working Backend Server");
})

// GET ALL notifications for a certain user
app.get("/:user/notifications", (req, res) => {
  return res.status(200).send(DATA);
});

// GET a SINGLE notification from a certain user
app.get("/:user/notification", (req, res) =>{
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("Title parameter is missing.");
  }

  const result = DATA.find((notif) => {
    return notif.title === title
  });

  if (result) {
    return res.status(200).send(result);
  } else {
    return res.status(404).send("Notification not found.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is now listening to PORT ${PORT}`);
});