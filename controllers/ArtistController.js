import storage from "../storage/dbTest.js";

function artistDetailGet(req, res) {
	const artist = storage.getArtistById(req.params.artistId);
	res.render("artistDetail", {
		artist: { ...artist, company: storage.getCompanyById(artist.companyId) },
		albums: storage.getAlbumsByArtistId(artist.id),
	});
}

const artistController = {
	artistDetailGet,
};
export default artistController;
