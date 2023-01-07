const taskManager = require('../managers/taskManager');
const {db} = require("../config");

module.exports = {
  async getTasks(ctx, next) {
    ctx.body = await taskManager.getTasks();
    ctx.status = 200;
    await next();
  },
  async getTask(ctx, next) {
    const { id } = ctx.params;
    const taskRows = await taskManager.getTask(id);

    if (!taskRows.length) {
      return ctx.throw(404, `Task with id ${id} not found`);
    }

    ctx.body = taskRows[0];
    ctx.status = 200;
    await next();
  },
  async createTask(ctx, next) {
    const { description, deadline, artifactId } = ctx.request.body;
    if (!description) {
      return ctx.throw(400, 'Description is required');
    }

    const taskRows = await taskManager.createTask(description, deadline, artifactId);

    ctx.body = taskRows[0];
    ctx.status = 201;
    await next();
  },
  async updateTask(ctx, next) {
    const { id } = ctx.params;
    const { description, deadline, artifactId } = ctx.request.body;


  },
  async deleteTask(ctx, next) {
    const { id } = ctx.params;
    const taskRows = await taskManager.getTask(id);
    if (!taskRows.length) {
      return ctx.throw(404, `Task with id ${id} not found`);
    }

    await taskManager.deleteTask(id);

    ctx.body = taskRows[0];
    ctx.status = 200;
    await next();
  },
}
