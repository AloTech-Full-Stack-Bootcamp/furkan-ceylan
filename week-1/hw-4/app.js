const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const router = new Router();

//set app
app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms = new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//get index
router.get("/index", (ctx) => {
  ctx.body = "<h1>I am index file.</h1>";
});

//get hakkimda
router.get("/hakkimda", (ctx) => {
  ctx.body = "<h1>I am hakkimda file.</h1>";
});

//get iletisim
router.get("/iletisim", (ctx) => {
  ctx.body = "<h1>I am iletisim file.</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 5000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalışmaya başladı...`);
});
