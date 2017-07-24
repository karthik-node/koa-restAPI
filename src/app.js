const Koa = require('koa');
const api = require('./api');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');

const app = new Koa()
  .use(cors())
  .use(async (ctx, next) => {
    const start = Date.now();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
    await next();
  })
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods());

export default app;