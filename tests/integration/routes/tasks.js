const Tasklists = require('../../../models/tasklists');
const Tasks = require('../../../models/tasks');

describe('Routes Tasks', () => {
  const defaultTasklist = {
    name: 'Default Tasklist',
    description: 'Default Tasklist Description',
  };

  const defaultTask = {
    name: 'Default Task',
    description: 'Default Task Description',
  };

  let tasklist;

  beforeEach((done) => {
    Tasklists.deleteAll()
      .then(() => Tasks.deleteAll())
      .then(() => Tasklists.create(defaultTasklist))
      .then((_tasklist) => {
        tasklist = _tasklist;
        defaultTask.owner = tasklist.id;
      })
      .then(() => Tasks.create(defaultTask))
      .then((task) => {
        done();
      })
      .catch(err => done(err));
  });

  describe('Route GET /api/tasks', () => {
    it('should return a list of tasklists', (done) => {
      request.get('/api/tasks')
        .end((err, res) => {
          expect(res.body[0].name).to.be.eql(defaultTask.name);
          expect(res.body[0].description).to.be.eql(defaultTask.description);

          done(err);
        });
    });
  });

  describe('Route POST /api/tasks', () => {
    it('should create a tasks that belongs to a tasklist', (done) => {
      const newTask = {
        name: 'New task',
        description: 'New Task description',
        owner: tasklist
      };

      request.post('/api/tasks')
        .send(newTask)
        .end((err, res) => {
          expect(res.body.name).to.be.eql(newTask.name);
          expect(res.body.description).to.be.eql(newTask.description);

          done(err);
        });
    });

    it('should create a task that have a tasklist id as owner', (done) => {
      const newTask = {
        name: 'Another new task',
        description: 'Another new task description',
        owner: tasklist.id,
      }

      request.post('/api/tasks')
        .send(newTask)
        .end((err, res) => {
          expect(res.body.name).to.be.eql(newTask.name);
          expect(res.body.description).to.be.eql(newTask.description);

          done(err);
        });
    });
  });
});
