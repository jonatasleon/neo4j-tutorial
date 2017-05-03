const db = require('./neo4j');
const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers');

const defaultCatch = _defaultCatch(db);

const createStmt = [
  'MATCH (tasklist:Tasklist)',
  'WHERE ID(tasklist) = { owner }',
  'CREATE (task:Task { name: { name }, description: { description }, created_at: timestamp() })-[:BELONGS_TO]->(tasklist)',
  'RETURN task',
].join(' ');
const getAllStmt = 'MATCH (task:Task) RETURN task';
const deleteAllStmt = 'MATCH (task:Task) DETACH DELETE task';

module.exports = {
  create: task => db.run(createStmt, task)
      .then((result) => {
        db.close();
        const createdTask = result.records.map(mapRecord('task'));
        return createdTask.pop();
      })
      .catch(defaultCatch),
  getAll: () => db.run(getAllStmt)
      .then((result) => {
        db.close();
        const createdTasks = result.records.map(mapRecord('task'));
        return createdTasks;
      }),
  deleteAll: () => db.run(deleteAllStmt)
      .then(() => {
        db.close();
      })
      .catch(defaultCatch),
};
