const { Router } = require('express');
const usersRoute = require('./users');
const tasklistsRoute = require('./tasklists');

const router = Router();

router.use('/users', usersRoute);
router.use('/tasklists', tasklistsRoute);

module.exports = router;
