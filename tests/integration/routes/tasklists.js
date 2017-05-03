const Tasklists = require('../../../models/tasklists');

describe('Routes Tasklists', () => {
  const defaultTasklist = {
    name: 'Default Tasklist',
    description: 'Default Tasklist Description',
  };

  let tasklist;

  beforeEach((done) => {
    Tasklists.deleteAll()
      .then(() => Tasklists.create(defaultTasklist))
      .then((_tasklist) => {
        tasklist = _tasklist;
        done();
      })
      .catch(err => done(err));
  });

  describe('Route GET /api/tasklists', () => {
    it('should return a list of tasklists', (done) => {
      request.get('/api/tasklists')
        .end((err, res) => {
          expect(res.body[0].name).to.be.eql(defaultTasklist.name);
          expect(res.body[0].description).to.be.eql(defaultTasklist.description);

          done(err);
        });
    });
  });

  describe('Route GET /api/tasklists/{id}', () => {
    it('should return a specific tasklist', (done) => {
      request.get(`/api/tasklists/${tasklist.id}`)
        .end((err, res) => {
          expect(res.body.id).to.be.eql(tasklist.id);
          expect(res.body.name).to.be.eql(defaultTasklist.name);
          expect(res.body.description).to.be.eql(defaultTasklist.description);

          done(err);
        });
    });
  });

  describe('Route POST /api/tasklists', () => {
    it('should create a tasklist', (done) => {
      const newTasklist = {
        name: 'New tasklist',
        description: 'Some new description',
      };

      request.post('/api/tasklists')
        .send(newTasklist)
        .end((err, res) => {
          expect(res.body.name).to.be.eql(newTasklist.name);
          expect(res.body.description).to.be.eql(newTasklist.description);

          done(err);
        });
    });
  });
});
