const db = [
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

module.exports = {
  getAllEnvelopes,
  db,
  getEnvelopeById,
};
