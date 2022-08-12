import Router from "koa-router";
import UserController from "../controllers/users.controller";

const router = new Router();

router.get("/users", async ctx => {
    try {
        ctx.response.status = 200;
        ctx.body = await UserController.index();
    } catch (error) {
        ctx.response.status = 500;
        ctx.body = {
            name: error.name,
            message: error.message,
        }
    }
});

router.post("/users", async ctx => {
    try {
        let user = ctx.request.body;
        user = await UserController.store(user);
        ctx.response.status = 201;
        ctx.body = user;
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = {
            name: error.name,
            message: error.message,
        }
    }
});

router.patch("/users/:id", async ctx => {
    try {
        let user = ctx.request.body;
        let { id } = ctx.request.params;
        user = await UserController.update(user, id);
        ctx.response.status = 200;
        ctx.body = user;
    } catch (error) {
        ctx.response.status = 400;
        ctx.body = {
            name: error.name,
            message: error.message,
        }
    }
});

router.delete("/users/:id", async ctx => {
    try {
        let { id } = ctx.request.params;
        await UserController.delete(id);
        ctx.response.status = 204;
        
    } catch (error) {
        ctx.response.status = 404;
        ctx.body = {
            name: error.name,
            message: error.message,
        }
    }
})

export default router;