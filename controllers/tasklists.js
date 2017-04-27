const tasklistModel = require('../models/tasklists');
const debug = require('debug')('neo4j-tutorial:controller');

function create(tasklist) {
  debug(tasklist);
  tasklistModel.create(tasklist)
    .then(result => result.records);
}

module.exports = {
  create
};
