const { Router } = require('express');
const taskController = require('../controllers/taskController');

const router = Router();

router
  .get('/tasks', taskController.getAll)
  .get('/tasks/:id', taskController.getOne)
  .post('/tasks', taskController.create)
  .put('/tasks/:id', taskController.update)
  .delete('/tasks/:id', taskController.delete);

module.exports = router;
