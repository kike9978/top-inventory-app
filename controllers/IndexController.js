import db from "../storage/db.js";

async function indexGet(req, res) {
	const items = await db.getAlbums();
	const albums = items.map((item) => {
		const album = {
			...item,
			artist: db.getArtistById(item.artistId).name,
		};
		return album;
	});
	const artists = await db.getArtists();

	res.render("index", { items: albums, artists });
}

const indexController = {
	indexGet,
};

export default indexController;
