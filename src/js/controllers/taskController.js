const taskManager = require('../managers/taskManager');
const { db } = require('../config');

module.exports = {
  async getTasks(ctx, next) {
    const tasks = await taskManager.getTasks();

    ctx.body = tasks[0];
    ctx.status = 200;
    await next();
  },
  async getTask(ctx, next) {
    const { id } = ctx.params;
    const taskRows = await taskManager.getTask(id);

    if (!taskRows[0].length) {
      return ctx.throw(404, {message: `Task with id ${id} not found`});
    }

    ctx.body = taskRows[0][0];
    ctx.status = 200;
    await next();
  },
  async createTask(ctx, next) {
    const { description, deadline, artifactId } = ctx.request.body;
    if (!description) {
      return ctx.throw(400, 'Description is required');
    }

    const taskRows = await taskManager.createTask(description, deadline, artifactId);

    ctx.body = taskRows[0][0];
    ctx.status = 201;
    await next();
  },
  async updateTask(ctx, next) {
    const { id } = ctx.params;
    const { description, deadline, artifactId } = ctx.request.body;

    if (!description) {
      return ctx.throw(400, 'Description is required');
    }

    const taskRows = await taskManager.getTask(id);
    if (!taskRows[0].length) {
      return ctx.throw(404, `Task with id ${id} not found`);
    }

    const updatedTaskRows = await taskManager.updateTask(id, description, deadline, artifactId);

    ctx.body = updatedTaskRows[0][0];
    ctx.status = 200;
    await next();
  },
  async deleteTask(ctx, next) {
    const { id } = ctx.params;
    const taskRows = await taskManager.getTask(id);
    if (!taskRows[0].length) {
      return ctx.throw(404, `Task with id ${id} not found`);
    }

    await taskManager.deleteTask(id);

    ctx.body = taskRows[0][0];
    ctx.status = 200;
    await next();
  },
}
