import { Router } from "express";
import newController from "../controllers/NewContoller";

const newRouter = Router();

newRouter.get("/album", newController.newAlbumGet);
newRouter.get("/", (req, res) => {
	res.send("hola");
});

export default newRouter;
