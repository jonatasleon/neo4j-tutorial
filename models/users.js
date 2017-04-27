const db = require('./neo4j');
const debug = require('debug')('neo4j-tutorial:db');

const createStmt = 'CREATE (user:User { email: { email }, password: { password } }) RETURN user';

function create(user) {
  return db.run(createStmt, user)
    .then(result => {
      db.close();
      return result;
    })
    .catch((err) => {
      console.error(err);
      console.log(Object.keys(err));
      err.code = 10;
      throw err;
    });
}

module.exports = {
  create
};
