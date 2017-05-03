const { v1: neo4j } = require('neo4j-driver');
const debug = require('debug')('neo4j-tutorial:model');

const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'root'));

const constraintStmt = 'CREATE CONSTRAINT ON (user:User) ASSERT user.email IS UNIQUE';

driver.onCompleted = () => {
  debug('Driver succesful');
  const session = driver.session();
  session.run(constraintStmt)
    .then(() => {
      debug(constraintStmt, 'runned');
      session.close();
    });
};

driver.onError = (err) => {
  debug('Driver error\n%O', err);
};

module.exports = driver.session();
