const Router = require('koa-router');
const koaBody = require('koa-body');
const taskController = require('../controllers/taskController');

const router = new Router({
  prefix: '/api',
});

router
  .use(koaBody())
  .get('/tasks', taskController.getTasks)
  .get('/tasks/:id', taskController.getTask)
  .post('/tasks', taskController.createTask)
  .put('/tasks', taskController.updateTask)
  .delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
