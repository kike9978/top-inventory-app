import { Router } from "express";
import albumController from "../controllers/AlbumController";

const albumRouter = Router();

albumRouter.get("/:albumId", albumController.specificAlbumGet);

export default albumRouter;
