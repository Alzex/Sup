# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення на початкового наповнення бази даних
```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `SUP` ;

-- -----------------------------------------------------
-- Schema SUP
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `SUP` DEFAULT CHARACTER SET utf8 ;
USE `SUP` ;

-- -----------------------------------------------------
-- Table `SUP`.`artifact`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`artifact` ;

CREATE TABLE IF NOT EXISTS `SUP`.`artifact` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`task` ;

CREATE TABLE IF NOT EXISTS `SUP`.`task` (
  `id` INT NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `deadline` DATETIME NULL DEFAULT NULL,
  `artifact_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_task_artifact1_idx` (`artifact_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_artifact1`
    FOREIGN KEY (`artifact_id`)
    REFERENCES `SUP`.`artifact` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`project` ;

CREATE TABLE IF NOT EXISTS `SUP`.`project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `team` VARCHAR(45) NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_project_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_project_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`member`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`member` ;

CREATE TABLE IF NOT EXISTS `SUP`.`member` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_member_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_member_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `SUP`.`task` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`team` ;

CREATE TABLE IF NOT EXISTS `SUP`.`team` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `icon` BLOB NULL,
  `memberList` VARCHAR(45) NULL,
  `project_id` INT NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project_idx` (`project_id` ASC) VISIBLE,
  INDEX `fk_team_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_project`
    FOREIGN KEY (`project_id`)
    REFERENCES `SUP`.`project` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_team_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`user` ;

CREATE TABLE IF NOT EXISTS `SUP`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `isAdmin` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  INDEX `fk_user_member1_idx` (`member_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `SUP`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `SUP`.`role` ;

CREATE TABLE IF NOT EXISTS `SUP`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `member_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_role_member1_idx` (`member_id` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  CONSTRAINT `fk_role_member1`
    FOREIGN KEY (`member_id`)
    REFERENCES `SUP`.`member` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

```

## RESTfull сервіс для управління даними

Для реалізації RESTfull сервісу використовується бібліотека `Koa.js`.  
Для роботи з базою даних використовується бібліотека `mysql2`.

### Структура проекту

  * `app.js` - головний файл проекту, в якому виконується ініціалізація сервера та роутів
---
  * `config` - папка з конфігураційними файлами
  * `config/index.js` - файл з конфігурацією сервера та бази даних
---
  * `routes` - папка з файлами роутів
  * `routes/index.js` - файл з роутами для роботи
---
  * `managers` - папка з файлами менеджерів (виконують роботу з базою даних)
  * `managers/taskManager.js` - файл з менеджером для роботи з таблицею `task` 
---
  * `controllers` - папка з файлами контролерів (містять логіку роботи з роутами)
  * `controllers/taskController.js` - файл з контролером для роботи з таблицею `task`
---
  * `middlewares` - папка з файлами middleware (виконують обробку/перевірку даних перед виконанням роута)'
  * `middlewares/errorHandler.js` - файл з middleware для обробки помилок
---
  * `modules` - папка з модулями
  * `modules/db.js` - модуль для роботи з базою даних
---
  * `package.json` - файл з описом проекту та залежностями
  * `package-lock.json` - файл з залежностями проекту

### Конфігурація сервера та бази даних

Конфігурація сервера та бази даних знаходиться в файлі `config/index.js`

```javascript
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'SUP',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  },
};
```
Для коректної роботи необхідно створити файл `.env` в корені проекту та вказати в ньому налаштування для бази даних та сервера.

Приклад файлу `.env`:
```
#Порт сервера
PORT=3000

#Налаштування бази даних
DB_NAME=SUP
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=abc123
DB_PORT=3306
```

### Головний файл

Головний файл `app.js`.

```javascript
const Koa = require('koa');
const http = require('http');
const { port } = require('./config');
const router = require('./routes');

const app = new Koa();

app
  .use(router.routes())
  .use(router.allowedMethods());

const server = http.createServer(app.callback());

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
```

### Маршрутизація

Маршрутизація знаходиться в файлі `routes/index.js`.

```javascript
const Router = require('koa-router');
const { koaBody } = require('koa-body');
const taskController = require('../controllers/taskController');
const errorHandler = require('../middlewares/errorHandler');

const router = new Router({
  prefix: '/api',
});

router
  .use(koaBody())
  .use(errorHandler)
  .get('/tasks', taskController.getTasks)
  .get('/tasks/:id', taskController.getTask)
  .post('/tasks', taskController.createTask)
  .put('/tasks/:id', taskController.updateTask)
  .delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
```

### Модуль для роботи з базою даних

Модуль для роботи з базою даних знаходиться в файлі `modules/db.js`.

```javascript
const mysql = require('mysql2/promise');
const { db } = require('../config');

const pool = mysql.createPool({ ...db });

module.exports = pool;
```

### Менеджер для роботи з таблицею `task`

Менеджер для роботи з таблицею `task` знаходиться в файлі `managers/taskManager.js`.

```javascript
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
```

### Контролер для роботи з таблицею `task`

Контролер для роботи з таблицею `task` знаходиться в файлі `controllers/taskController.js`.

```javascript
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
```

### Мідлвар для обробки помилок

Мідлвар для обробки помилок знаходиться в файлі `middlewares/errorHandler.js`.  
Мідлвар обгортає помилки які виникають в контролерах у формат JSON.

```javascript
module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const { status = 500, message } = err;
    ctx.status = status;
    ctx.body = { status, message };
  }
}
```
