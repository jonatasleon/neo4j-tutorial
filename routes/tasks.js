const { Router } = require('express');
const debug = require('debug')('neo4j-tutorial:route');

const TasksController = require('../controllers/tasks');
const task = require('../models/tasks');

const { errorReponse } = require('./helpers');

const router = Router();
const taskCtrl = TasksController(task);

router.post('/', (req, res) => {
  taskCtrl.create(req.body)
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
