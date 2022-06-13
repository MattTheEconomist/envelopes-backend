let db = [
  { id: "1", category: "rent", expense: "500" },

  { id: "2", category: "utilities", expense: "200" },

  { id: "3", category: "groceries", expense: "100" },
];

const getAllEnvelopes = () => {
  return db;
};

const getEnvelopeById = (envId) => {
  const strId = envId.toString();
  rez = db.filter((row) => row.id === strId);
  if (rez.length > 0) {
    return rez;
  } else {
    return null;
  }
};

const isValidInstance = (instance) => {
  return (
    instance.hasOwnProperty("category") && instance.hasOwnProperty("expense")
  );
};

const pushToDatabase = (instance) => {
  if (isValidInstance(instance)) {
    let dbLength = db.length + 1;
    let newId = (dbLength += 1);
    instance.id = newId;
    db.push(instance);
    return instance;
  }
  return null;
};

const updateInstance = (instance) => {
  const dataIdx = db.findIndex((row) => row.id === instance.id);

  //   console.log(dataIdx, isValidInstance(instance));
  //   console.log(dataIdx > 0);

  if (dataIdx > 0 && isValidInstance(instance)) {
    db[dataIdx] = instance;

    return true;
  }
  console.log("validation failed");
  return null;
};

const deleteInstance = (requestedId) => {
  //   console.log("reqId", requestedId, typeof requestedId);

  const dataIdx = db.findIndex((row) => row.id === requestedId);
  if (dataIdx > -1) {
    db.splice(dataIdx, 1);
    return true;
  }
  console.log("validation failed");
  return null;
};

module.exports = {
  getAllEnvelopes,
  db,
  getEnvelopeById,
  pushToDatabase,
  updateInstance,
  deleteInstance,
};
