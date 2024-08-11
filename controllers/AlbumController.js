import storage from "../storage/dbTest";

function specificAlbumGet(req, res) {
	const album = storage.getAlbumById(req.params.albumId);

	// if (!album) {
	// 	return res.status(404).send("No album Found");
	// }
	res.render("index", { items: [album] });
}

const albumController = {
	specificAlbumGet,
};

export default albumController;
