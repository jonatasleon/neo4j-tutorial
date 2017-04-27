const db = require('./neo4j');
const debug = require('debug')('neo4j-tutorial:db');

const createStmt = [
  'MATCH (user:User) WHERE user.email = {email}',
  'CREATE r=(tl:TaskList { name: { name }, created_on: timestamp() })-[:BELONGS]->(user)',
  'RETURN r'
].join(' ');

function create(tasklist) {
  return db.run(createStmt, tasklist)
    .then(result => {
      db.close();
      return result;
    })
    .catch((err) => {
      db.close();
      throw err;
    });
}

module.exports = {
  create
};
