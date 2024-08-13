import { Router } from "express";
import albumController from "../controllers/AlbumController.js";

const albumRouter = Router();

albumRouter.get("/:albumId", albumController.specificAlbumGet);

export default albumRouter;
