module.exports = {
  mapRecord: (label) => (record) => {
    return Object.assign({
      id: record.toObject()[label].identity.toInt()
    }, record.toObject()[label].properties)
  },
  defaultCatch: (db) => (err) => {
    db.close();
    throw err;
  }
};
