const express = require("express");
const app = express();
const myGear = require('./api/myGear.json');
const checklists = require('./api/myChecklists.json');
const rels = require('./api/itemToChecklistRelations.json');
const cors = require('cors');

app.use(cors())

app.get("/api/myGear", (req, res, next) => {
  res.json(myGear);
});

app.get("/api/checklists", (req, res, next) => {
  res.json(checklists);
});

app.get("/api/rels", (req, res, next) => {
  res.json(rels);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
