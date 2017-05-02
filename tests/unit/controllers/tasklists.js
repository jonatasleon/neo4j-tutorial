const TasklistController = require('../../../controllers/tasklists');

describe('Controllers: Tasklists', () => {

  describe('Get all tasklists: getAll()', () => {

    it('should return all tasklists', () => {
      const Tasklist = {
        getAll: td.function(),
      }

      const expectedResponse = [{
        id: 1,
        name: 'Test Book 1',
        created_at: '2016-10-08T19:03:02.923Z',
        description: 'Some desc here',
      }, {
        id: 2,
        name: 'Test Book 2',
        created_at: '2016-10-08T19:03:02.923Z',
        description: 'Another desc here',
      }];

      td.when(Tasklist.getAll()).thenResolve(expectedResponse);

      const tasklistCtrl = TasklistController(Tasklist);
      return tasklistCtrl.getAll()
        .then((response) => expect(response).to.be.eql(expectedResponse));
    });
  });

  describe('Get specific tasklist by id: getById()', () => {
    it('should return a tasklist', () => {
      const Tasklist = {
        getById: td.function(),
      };

      const expectedResponse = {
        id: 1,
        name: 'Test Book 1',
        created_at: '2016-10-08T19:03:02.923Z',
        description: 'Some desc here',
      };

      td.when(Tasklist.getById(1)).thenResolve(expectedResponse);

      const tasklistCtrl = TasklistController(Tasklist);
      return tasklistCtrl.getById(1)
        .then((response) => {
          expect(response).to.be.eql(expectedResponse);
        });
    })
  });

  describe('Create a tasklist: create()', () => {
    it('should create a tasklist', () => {
      const Tasklist = {
        create: td.function(),
      };

      const requestBody = {
        name: 'Test Tasklist',
      };

      const expectedResponse = {
        name: 'Test Book',
        created_at: '2016-10-08T19:03:02.923Z',
      };

      td.when(Tasklist.create(requestBody)).thenResolve(expectedResponse);

      const tasklistCtrl = TasklistController(Tasklist);
      return tasklistCtrl.create(requestBody)
        .then((response) => {
          expect(response).to.be.eql(expectedResponse);
        });
    });
  });
});
