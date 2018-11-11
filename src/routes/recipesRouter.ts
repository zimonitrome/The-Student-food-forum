import express = require("express");

const recipesRouter = express.Router();

recipesRouter.get("/", (_req, res) => {
  res.send(200);
});

recipesRouter.post("/", (_req, res) => {
  res.send(200);
});

recipesRouter.delete("/{userId}", async (_req, res) => {
  res.send(200);
});

recipesRouter.put("/{userId}", async (_req, res) => {
  res.send(200);
});

export default recipesRouter;