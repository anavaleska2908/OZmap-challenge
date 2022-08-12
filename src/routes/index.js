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

export default router;