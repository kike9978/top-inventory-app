import { Router } from "express";
import updateController from "../controllers/UpdateController.js";

const updateRouter = Router();

updateRouter.get("/album/:albumId", updateController.updateAlbumGet);
updateRouter.post("/album/:albumId", updateController.updateAlbumPost);
updateRouter.get("/artist/:artistId", updateController.updateArtistGet);
updateRouter.post("/artist/:artistId", updateController.updateArtistPost);
updateRouter.get("/company/:companyId", updateController.updateCompanyGet);
updateRouter.post("/company/:companyId", updateController.updateCompanyPost);
updateRouter.get("/", (req, res) => {
	res.send("not Found");
});

export default updateRouter;
