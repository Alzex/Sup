const taskManager = require('../managers/taskManager');

const taskController = {
  async getAll(req, res) {
    const tasks = await taskManager.getAll();
    res.json(tasks);
  },

  async getOne(req, res) {
    const { id } = req.params;

    const task = await taskManager.getOne(id);

    if (task.length === 0) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    res.json(task[0]);
  },

  async create(req, res) {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: 'Name and description are required',
      });
    }

    try {
      const task = await taskManager.create({ name, description });
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({
        message: 'Internal server error',
      });
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, description, artifactId } = req.body;

    const taskToUpdate = await taskManager.getOne(id);

    if (taskToUpdate.length === 0) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    if (!name || !description) {
      return res.status(400).json({
        message: 'Name and description are required',
      });
    }

    const task = await taskManager.update(id, { name, description, artifactId });

    res.json(task);

  },
  async delete(req, res) {
    const { id } = req.params;
    const task = await taskManager.getOne(id);

    if (task.length === 0) {
      return res.status(404).json({
        message: `Task with id ${id} not found`,
      });
    }

    await taskManager.delete(id);

    res.json(task[0]);
  },
}

module.exports = taskController;
