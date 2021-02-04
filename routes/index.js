const express = require("express");
const messages = require("../messages");
const router = express.Router();
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", message: messages });
  next();
});
router.get("/new", function (req, res, next) {
  res.render("new", { title: "New Message" });
  next();
});
router.post("/new", (req, res) => {
  const newmsg = {
    ...req.body,
    added: new Date(),
  };

  if (!newmsg.user || !newmsg.text) {
    return res.status(400).json({ msg: "Please include a name and text" });
  }

  messages.push(newmsg);
  //res.json(messages);
  res.redirect("/");
});

module.exports = router;
