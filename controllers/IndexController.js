import storage from "../storage/dbTest";

function indexGet(req, res) {
	const items = storage.getItems();
	const albums = items.map((item) => {
		const album = {
			...item,
			artist: storage.getArtistById(item.artistId).name,
		};
		return album;
	});
	console.log(albums);
	res.render("index", { items: albums, artists: storage.getArtists() });
}

const indexController = {
	indexGet,
};

export default indexController;
