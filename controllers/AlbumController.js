import db from "../storage/db.js";

async function specificAlbumGet(req, res) {
	const album = await db.getAlbumById(req.params.albumId);

	// if (!album) {
	// 	return res.status(404).send("No album Found");
	// }
	res.render("albumDetail", { album });
}

const albumController = {
	specificAlbumGet,
};

export default albumController;
