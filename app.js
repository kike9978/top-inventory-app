import express from "express";
import dotenv from "dotenv";
import indexController from "./controllers/IndexController";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.set("views", "views");
app.set("view engine", "ejs");

app.get("/", indexController.indexGet);

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
