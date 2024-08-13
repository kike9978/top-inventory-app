import { Router } from "express";
import artistController from "../controllers/ArtistController";

const artistRouter = new Router();

artistRouter.get("/:artistId", artistController.artistDetailGet);

export default artistRouter;
