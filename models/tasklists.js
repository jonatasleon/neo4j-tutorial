const db = require('./neo4j');
const debug = require('debug')('neo4j-tutorial:db');

const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const getAllStmt = 'MATCH (tasklist:Tasklist) RETURN tasklist';
const getByIdStmt = 'MATCH (tasklist:Tasklist) WHERE ID(tasklist) = { id } RETURN tasklist';
const deleteAllStmt = 'MATCH (tasklist:Tasklist) DETACH DELETE tasklist';
const createStmt = [
  'CREATE (tasklist:Tasklist { name: { name }, description: { description }, created_on: timestamp() })',
  'RETURN tasklist',
].join(' ');

module.exports = {
  deleteAll: () => db.run(deleteAllStmt)
      .then(() => {
        db.close();
      })
      .catch(defaultCatch),
  getAll: () => db.run(getAllStmt)
      .then((result) => {
        db.close();
        return result.records.map(mapRecord('tasklist'));
      })
      .catch(defaultCatch),
  getById: id => db.run(getByIdStmt, { id })
      .then((result) => {
        db.close();
        return result.records.map(mapRecord('tasklist')).pop();
      })
      .catch(defaultCatch),
  create: tasklist => db.run(createStmt, tasklist)
      .then((result) => {
        db.close();
        const createdTasklist = result.records.map(mapRecord('tasklist'));
        return createdTasklist.pop();
      })
      .catch(defaultCatch),
};
