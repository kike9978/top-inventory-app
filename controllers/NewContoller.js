import storage from "../storage/dbTest";

function newAlbumGet(req, res) {
	res.render("newAlbum", { artists: storage.getArtists() });
}
function newArtistGet(req, res) {
	res.render("newArtist", { companies: storage.getCompanies() });
}
function newCompanyGet(req, res) {
	res.render("newCompany");
}
function newAlbumPost(req, res) {
	storage.addAlbum(req.body);
	res.redirect("/");
}
function newArtistPost(req, res) {
	storage.addArtist(req.body);
	res.redirect("/");
}
function newCompanyPost(req, res) {
	storage.addCompany(req.body);
	res.redirect("/");
}

const newController = {
	newAlbumGet,
	newAlbumPost,
	newArtistGet,
	newArtistPost,
	newCompanyGet,
	newCompanyPost,
};

export default newController;
