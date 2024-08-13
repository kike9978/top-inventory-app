import express from "express";
import dotenv from "dotenv";
import indexController from "./controllers/IndexController";
import path from "node:path";
import albumRouter from "./routers/Albums";
import newRouter from "./routers/New";

dotenv.config();
const assetsPath = path.join(__dirname, "/public");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));
app.set("views", "views");
app.set("view engine", "ejs");

app.use("/album", albumRouter);
app.use("/new", newRouter);
app.get("/", indexController.indexGet);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
