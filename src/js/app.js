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
