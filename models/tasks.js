const db = require('./neo4j');

const { mapRecord, defaultCatch: _defaultCatch } = require('./helpers')
const defaultCatch = _defaultCatch(db);

const deleteAllStmt = 'MATCH (task:Task) DETACH DELETE task';
const createStmt = [
  'MATCH (tasklist:Tasklist)',
  'WHERE ID(tasklist) = { owner }',
  'CREATE (task:Task { name: { name }, description: { description }, created_at: timestamp() })-[:BELONGS_TO]->(tasklist)',
  'RETURN task'
].join(' ');

module.exports = {
  create: (task) => {
    return db.run(createStmt, task)
      .then(result => {
        db.close();
        const createdTask = result.records.map(mapRecord('task'));
        return createdTask.pop();
      })
      .catch(defaultCatch);;
  },
  deleteAll: () => {
    return db.run(deleteAllStmt)
      .then(() => {
        db.close();
      })
      .catch(defaultCatch);
  },
}
