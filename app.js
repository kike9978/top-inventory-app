import express from "express";
import dotenv from "dotenv";
import indexController from "./controllers/IndexController.js";
import path from "node:path";
import albumRouter from "./routers/Albums.js";
import newRouter from "./routers/New.js";
import artistRouter from "./routers/Artists.js";
import updateRouter from "./routers/Update.js";
import * as url from "node:url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const __filename = url.fileURLToPath(import.meta.url);

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
app.use("/edit", updateRouter);
app.use("/artist", artistRouter);
app.get("/", indexController.indexGet);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
