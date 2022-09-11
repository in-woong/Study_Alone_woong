// require('dotenv').config();
// const Koa = require('koa');
// const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');

// const { PORT } = process.env;

// const api = require('./api');

// const app = new Koa();
// const router = new Router();

// router.use('/api', api.routes());

// app.use(bodyParser());

// app.use(router.routes()).use(router.allowedMethods());

// const port = PORT || 4000;
// app.listen(port, () => {
//   console.log('Listening to port %d', port);
// });

const Koa = require('koa');
const app = new Koa();
app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  next();
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

app.use((ctx) => {
  ctx.body = 'hello world';
});
app.listen(4000, () => {
  console.log('Listening to port 4000');
});
