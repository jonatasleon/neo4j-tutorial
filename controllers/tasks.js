const debug = require('debug')('neo4j-tutorial:controller');

module.exports = taskModel => ({
  getAll: owner => taskModel.getAll(owner),
  create: (task) => {
    const ownerId = {
      owner: isNaN(task.owner) ? task.owner.id : task.owner,
    };

    return taskModel.create(Object.assign(task, ownerId));
  },
});
