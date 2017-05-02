const debug = require('debug')('neo4j-tutorial:controller');

module.exports = (taskModel) => ({
  getAll: (owner) => {
    return taskModel.getAll(owner);
  },
});
