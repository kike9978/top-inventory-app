import storage from "../storage/dbTest";

function artistDetailGet(req, res) {
	const artist = storage.getArtistById(req.params.artistId);
	console.log({
		artist: { ...artist, company: storage.getCompanyById(artist.companyId) },
	});
	res.render("artistDetail", {
		artist: { ...artist, company: storage.getCompanyById(artist.companyId) },
	});
}

const artistController = {
	artistDetailGet,
};
export default artistController;
