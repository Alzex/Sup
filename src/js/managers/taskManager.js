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
  updateTask(id, parameters, values) {
    return db.query(`UPDATE task SET (${parameters.join(',')}) WHERE id = ?`, values)
      .then(() => this.getTask(id));
  }

  },
  deleteTask(id) {
    return db.query('DELETE FROM task WHERE id = ?', [id]);
  }
}
