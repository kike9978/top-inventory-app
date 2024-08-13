import storage from "../storage/dbTest.js";

function specificAlbumGet(req, res) {
	const album = storage.getAlbumById(req.params.albumId);

	// if (!album) {
	// 	return res.status(404).send("No album Found");
	// }
	console.log(album);
	res.render("albumDetail", { album });
}

const albumController = {
	specificAlbumGet,
};

export default albumController;
