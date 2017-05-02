const debug = require('debug')('neo4j-tutorial:controller');

module.exports = (taskModel) => ({
  getAll: (owner) => {
    return taskModel.getAll(owner);
  },
  create: (task) => {
    return taskModel.create(Object.assign(task, {owner: task.owner.id}));
  },
});
