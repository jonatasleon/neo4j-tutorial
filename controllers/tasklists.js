const debug = require('debug')('neo4j-tutorial:controller');

module.exports = tasklistModel => ({
  getAll: () => tasklistModel.getAll(),
  getById: id => tasklistModel.getById(parseInt(id, 10)),
  create: tasklist => tasklistModel.create(tasklist),
});
