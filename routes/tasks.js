const { Router } = require('express');
const debug = require('debug')('neo4j-tutorial:route');

const TasksController = require('../controllers/tasks');
const taskModel = require('../models/tasks');

const router = Router();
const taskCtrl = TasksController(taskModel);

router.post('/', (req, res) => {
  taskCtrl.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err));
});

router.get('/', (req, res) => {
  taskCtrl.getAll()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
