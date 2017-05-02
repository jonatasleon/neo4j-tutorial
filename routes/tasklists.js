const { Router } = require('express');
const debug = require('debug')('neo4j-tutorial:route');

const TasklistsController = require('../controllers/tasklists');
const tasklist = require('../models/tasklists');

const router = Router();
const tasklistsCtrl = TasklistsController(tasklist);

router.get('/', (req, res) => {
  tasklistsCtrl.getAll()
    .then(tasklists => res.json(tasklists));
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  tasklistsCtrl.getById(req.params.id)
    .then(tasklist => res.json(tasklist))
    .catch(err => res.status(500).json(err));
});

/* POST create tasklist */
router.post('/', (req, res) => {
  tasklistsCtrl.create(req.body)
    .then(tasklist => res.json(tasklist));
});

module.exports = router;
