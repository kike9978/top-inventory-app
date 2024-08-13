import storage from "../storage/dbTest.js";
import { body, validationResult } from "express-validator";

const validateAlbum = [
	body("title").trim().notEmpty(),
	body("member").trim(),
	body("imageUrl").trim().optional().isURL(),
	body("artistId").notEmpty().withMessage("cannot be empty"),
];

function newAlbumGet(req, res) {
	res.render("newAlbum", { artists: storage.getArtists() });
}
function newArtistGet(req, res) {
	res.render("newArtist", { companies: storage.getCompanies() });
}
function newCompanyGet(req, res) {
	res.render("newCompany");
}

const newAlbumPost = [
	validateAlbum,
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send(errors.array()[0]);
		}
		storage.addAlbum(req.body);
		res.redirect("/");
	},
];

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
