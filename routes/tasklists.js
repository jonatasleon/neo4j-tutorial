const { Router } = require('express');
const debug = require('debug')('neo4j-tutorial:route');

const tasklistsCtrl = require('../controllers/tasklists');

const router = Router();

/* POST create tasklist */
router.post('/', (req, res) => {
  debug(req.body);
  tasklistsCtrl.create(req.body)
    .then(tasklist => {
      res.json(tasklist);
    })
    .catch((err) => res.status(500).json(new Error('Deu ruim na bagacera')));
});

module.exports = router;
