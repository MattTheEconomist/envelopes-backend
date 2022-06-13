const envRouter = require("express").Router();

module.exports = envRouter;

const {
  getAllEnvelopes,
  db,
  getEnvelopeById,
  pushToDatabase,
  updateInstance,
  deleteInstance,
} = require("../db");

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

envRouter.post("/", (req, res, next) => {
  const newEnvelope = pushToDatabase(req.body);
  if (newEnvelope) {
    console.log("new envelope pushing", newEnvelope);
    res.status(201).send();
  } else {
    res.status(400).send();
  }
});

envRouter.put("/:envId", (req, res, next) => {
  const updatedInst = updateInstance(req.body);
  //   console.log("triggred from env.js");
  res.status(202).send(updatedInst);
});

envRouter.delete("/:envId", (req, res, next) => {
  //   const deletedInst = deleteInstance(req.body);
  //   console.log(req.params);
  const deletedInst = deleteInstance(req.params.envId);
  res.status(200).send(deletedInst);
});

envRouter.put("/transfer/:from/:to", (req, res, next) => {
  console.log(req.params);

  res.status(200).send();
});
