import { Router } from "express";
import artistController from "../controllers/ArtistController.js";

const artistRouter = new Router();

artistRouter.get("/:artistId", artistController.artistDetailGet);

export default artistRouter;
