const db = require('../modules/db');

const taskManager = {
  getAll() {
    return db.query('SELECT * FROM task');
  },
  getOne(id) {
    return db.query('SELECT * FROM task WHERE id = ?', [id]);
  },
  create(task) {
    return db.query('INSERT INTO task SET name = ?, description = ?', [task.name, task.description]);
  },
  update(id, task) {
    return db.query(
      'UPDATE task SET name = ?, description = ?, artifact_id = ? WHERE id = ?',
      [
        task.name,
        task.description,
        task.artifactId,
        task.id
      ]);
  },
  delete(id) {
    return db.query('DELETE FROM task WHERE id = ?', [id]);
  },
}

module.exports = taskManager;
