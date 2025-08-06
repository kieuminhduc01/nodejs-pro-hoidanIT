import express, { Express, Router } from "express";
import { getCreateUserPage, getHomePage, postCreateUser } from "../controllers/user.controller";

const router:Router = express.Router();

const webRoutes = (app:Express) => {
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUserPage);
    router.post("/handle-create-user",postCreateUser)


    app.use('/', router);
}

export default webRoutes
