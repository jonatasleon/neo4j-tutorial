const TaskController = require('../../../controllers/tasks');

describe('Controllers: Tasks', () => {
  describe('Get all tasks from a tasklist: getAll()', () => {
    it('should return all tasks', () => {
      const Task = {
        getAll: td.function(),
      };

      const owner = {
        id: 1,
        name: 'Tasklist owner',
        description: 'Someother desc here',
        created_at: '2016-10-08T19:03:02.923Z',
      };

      const expectedResponse = [{
        id: 2,
        name: 'Test Task 1',
        created_at: '2016-10-08T19:03:02.923Z',
        description: 'Some desc here',
        belongs: owner,
      }];

      td.when(Task.getAll(owner)).thenResolve(expectedResponse);

      const taskCtrl = TaskController(Task);
      return taskCtrl.getAll(owner)
        .then(response => expect(response).to.be.eql(expectedResponse));
    });
  });

  describe('Create a task that belongs to a tasklist: create()', () => {
    it('should create a task', () => {
      const Task = {
        create: td.function(),
      };

      const owner = {
        id: 2,
        name: 'Tasklist owner',
        description: 'Someother desc here',
        created_at: '2016-10-08T19:03:02.923Z',
      };

      const requestBody = {
        name: 'Default Task',
        description: 'Default Task Description',
        owner: 2,
      };

      const expectedResponse = {
        id: 3,
        name: 'Default Task',
        description: 'Default Task Description',
        created_at: '2016-10-08T19:03:02.923Z',
        owner,
      };

      td.when(Task.create(requestBody)).thenResolve(expectedResponse);

      const taskCtrl = TaskController(Task);
      taskCtrl.create(requestBody)
        .then((task) => {
          expect(task).to.be.eql(expectedResponse);
        });
    });

    it('should create a task with tasklist id', () => {
      const Task = {
        create: td.function(),
      };

      const owner = 2;

      const requestBody = {
        name: 'Default Task',
        description: 'Default Task Description',
        owner,
      };

      const expectedResponse = {
        id: 3,
        name: 'Default Task',
        description: 'Default Task Description',
        created_at: '2016-10-08T19:03:02.923Z',
        owner,
      };

      td.when(Task.create(requestBody)).thenResolve(expectedResponse);

      const taskCtrl = TaskController(Task);
      taskCtrl.create(requestBody)
        .then((task) => {
          expect(task).to.be.eql(expectedResponse);
        });
    });
  });
});
