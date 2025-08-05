import express, { Express } from "express";

const router = express.Router();

const webRoutes = (app:Express) => {
    router.get("/", (req, res) => {
        res.render("home.ejs");
    });

    router.get("/hoidanit", (req, res) => {
        res.send("Hello eric");
    });

    router.get("/abc", (req, res) => {
        res.send("Hello abc");
    });

    app.use('/z', router);
}

export default webRoutes
