import express from "express";
const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send("Hello World !123");
});
app.get('/hoidanit', (req, res) => {
    res.send("Hello World");
});
app.listen(PORT, () => {
    console.log('Listen on port 8080');
});
//# sourceMappingURL=app.js.map