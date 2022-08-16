import Router from "koa-router";
import UserController from "../controllers/users.controller.js";

const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = "Seu servidor está rodando"
});

router.post("/users", async ctx => {
    try {
        let user = ctx.request.body;
        user = await UserController.store(user);
        ctx.response.status = 201;
        ctx.body = user;
    } catch (error) {
        ctx.app.emit("error", error, ctx);
    }
});

router.get("/users", async ctx => {
    try {
        ctx.response.status = 200;
        ctx.body = await UserController.index();
    } catch (error) {
        ctx.app.emit("error", error, ctx);
    }
});

router.get("/users/:id", async ctx => {
    try {
        let { id } = ctx.request.params;
        ctx.response.status = 200;
        ctx.body = await UserController.show(id);
    } catch (error) {
        ctx.app.emit("error", error, ctx);
    }
})

router.patch("/users/:id", async ctx => {
    try {
        let user = ctx.request.body;
        let { id } = ctx.request.params;
        user = await UserController.update(user, id);
        ctx.response.status = 200;
        ctx.body = user;
    } catch (error) {
        ctx.app.emit("error", error, ctx);
    }
});

router.delete("/users/:id", async ctx => {
    try {
        let { id } = ctx.request.params;
        await UserController.delete(id);
        ctx.response.status = 204;
        
    } catch (error) {
        ctx.app.emit("error", error, ctx);
    }
})

export default router;