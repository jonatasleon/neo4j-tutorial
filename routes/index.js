const { Router } = require('express');
const tasklistsRoute = require('./tasklists');
const tasksRoute = require('./tasks');

const router = Router();

router.use('/tasklists', tasklistsRoute);
router.use('/tasks', tasksRoute);

module.exports = router;
