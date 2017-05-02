const debug = require('debug')('neo4j-tutorial:controller');

module.exports = (tasklistModel) => ({
  getAll: () => {
    return tasklistModel.getAll();
  },
  getById: (id) => {
    return tasklistModel.getById(parseInt(id));
  },
  create: (tasklist) => {
    return tasklistModel.create(tasklist);
  },
});
