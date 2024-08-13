import storage from "../storage/dbTest";

function artistDetailGet(req, res) {
	const artist = storage.getArtistById(req.params.artistId);
	res.render("artistDetail", { artist });
}

const artistController = {
	artistDetailGet,
};
export default artistController;
