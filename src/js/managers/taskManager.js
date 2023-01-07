const db = require('../modules/db');

module.exports = {
  getTasks() {
    return db.query('SELECT * FROM task');
  },
  getTask(id) {
    return db.query('SELECT * FROM task WHERE id = ?', [id]);
  },
  createTask(description, deadline, artifactId) {
    return db.query('INSERT INTO task (description, deadline, artifact_id) VALUES (?, ?, ?)',
      [
        description,
        deadline || null,
        artifactId || null,
      ],
    ).then(() => {
      return db.query('SELECT * FROM task WHERE id = LAST_INSERT_ID()');
    });
  },
  updateTask(id, description, deadline, artifactId) {
    return db.query(`UPDATE task SET description = ?, deadline = ?, artifact_id = ? WHERE id = ?`,
      [
        description,
        deadline || null,
        artifactId || null,
        id
      ]
    ).then(() => this.getTask(id));
  },

  deleteTask(id) {
    return db.query('DELETE FROM task WHERE id = ?', [id]);
  },
}
