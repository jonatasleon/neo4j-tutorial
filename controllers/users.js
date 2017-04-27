const usersModel = require('../models/users');
const debug = require('debug')('neo4j-tutorial:controller');

function create(user) {
  debug(user);
  return usersModel.create(user)
    .then((result) => result.records[0]._fields.pop().properties);
}

module.exports = {
  create
};
