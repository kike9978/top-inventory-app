import storage from "../storage/dbTest";

function newAlbumGet(req, res) {
	res.render("newAlbum", { artists: storage.getArtists() });
}
function newArtistGet(req, res) {
	res.render("newArtist");
}
function newAlbumPost(req, res) {
	storage.addAlbum(req.body);
	res.redirect("/");
}
function newArtistPost(req, res) {
	storage.addArtist(req.body);
	res.redirect("/");
}

const newController = {
	newAlbumGet,
	newAlbumPost,
	newArtistGet,
	newArtistPost,
};

export default newController;
