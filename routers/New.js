import { Router } from "express";
import newController from "../controllers/NewContoller.js";

const newRouter = Router();

newRouter.get("/album", newController.newAlbumGet);
newRouter.post("/album", newController.newAlbumPost);
newRouter.get("/artist", newController.newArtistGet);
newRouter.post("/artist", newController.newArtistPost);
newRouter.get("/company", newController.newCompanyGet);
newRouter.post("/company", newController.newCompanyPost);
newRouter.get("/", (req, res) => {
	res.send("not Found");
});

export default newRouter;
