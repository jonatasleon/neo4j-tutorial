const { Router } = require('express');
const debug = require('debug')('neo4j-tutorial:route');

const usersCtrl = require('../controllers/users');

const router = Router();

/* POST create user */
router.post('/', (req, res) => {
  debug(req.body);
  usersCtrl.create(req.body)
    .then((result) => {
      debug(result);
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    })
});

module.exports = router;
