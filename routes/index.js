const { Router } = require('express');
const usersRoute = require('./users');
const tasklistsRoute = require('./tasklists');
const tasksRoute = require('./tasks');

const router = Router();

router.use('/users', usersRoute);
router.use('/tasklists', tasklistsRoute);
router.use('/tasks', tasksRoute);

module.exports = router;
