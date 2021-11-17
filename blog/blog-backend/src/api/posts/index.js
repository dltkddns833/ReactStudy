const Router = require("koa-router");
const posts = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params,
  };
};

posts.get("/", printInfo.list);
posts.post("/", printInfo.write);
posts.get("/:id", printInfo.read);
posts.delete("/:id", printInfo.remove);
posts.put("/:id", printInfo.replace);
posts.patch("/:id", printInfo.update);

module.exports = posts;
