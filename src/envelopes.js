const envRouter = require("express").Router();

module.exports = envRouter;

const { getAllEnvelopes, db, getEnvelopeById } = require("../db");

envRouter.param("envId", (req, res, next, id) => {
  const testVar = id.toString();

  const envelope = getEnvelopeById(testVar);

  //   console.log(" from envelopes.js", getEnvelopeById(testVar));

  //   console.log(" from envelopes.js", envelope);

  if (envelope) {
    req.envelope = envelope;
    next();
  } else {
    res.status(404).send("wrong id brah");
  }
});

envRouter.get("/", (req, res, next) => {
  res.send(getAllEnvelopes(db));
});

envRouter.get("/:envId", (req, res, next) => {
  res.send(req.envelope);
});
