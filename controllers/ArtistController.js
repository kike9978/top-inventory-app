import db from "../storage/db.js";

async function artistDetailGet(req, res) {
	const artist = await db.getArtistById(req.params.artistId);
	let company = "";
	if (artist.companyId) {
		company = await db.getCompanyById(artist.companyId);
	}
	const albums = await db.getAlbumsByArtistId(artist.id);
	res.render("artistDetail", {
		artist: { ...artist, company },
		albums,
	});
}

const artistController = {
	artistDetailGet,
};
export default artistController;
