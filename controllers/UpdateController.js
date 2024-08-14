import db from "../storage/db.js";
import { body, validationResult } from "express-validator";
import shortFormatter from "../utils/dateFormatter.js";

const validateAlbum = [
	body("title").trim().notEmpty(),
	body("member").trim(),
	body("imageUrl").trim().optional().isURL(),
	body("discountPrice")
		.trim()
		.optional()
		.custom((value) => {
			if (value === "") {
				return true;
			}
			if (Number.isNaN(value)) {
				throw new Error("Must be a number");
			}
			return true;
		}),
	body("reviewScore")
		.trim()
		.optional()
		.custom((value) => {
			if (value === "") {
				return true;
			}
			if (Number.isNaN(value)) {
				throw new Error("Must be a number");
			}
			return true;
		}),
	body("artistId").notEmpty().withMessage("cannot be empty"),
];

async function updateAlbumGet(req, res) {
	const artists = await db.getArtists();
	res.render("updateAlbum", { artists });
}
async function updateArtistGet(req, res) {
	const artist = await db.getArtistById(req.params.artistId);
	const companies = await db.getCompanies();
	res.render("updateArtist", {
		artist: { ...artist, debutDate: shortFormatter(artist.debutDate) },
		companies,
	});
}
function updateCompanyGet(req, res) {
	res.render("updateCompany");
}

const updateAlbumPost = [
	validateAlbum,
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send(errors.array()[0]);
		}

		await db.updateAlbum(req.body);
		res.redirect("/");
	},
];

async function updateArtistPost(req, res) {
	await db.updateArtist(req.body, req.params.artistId);
	res.redirect("/");
}
async function updateCompanyPost(req, res) {
	await db.updateCompany(req.body);
	res.redirect("/");
}

const updateController = {
	updateAlbumGet,
	updateAlbumPost,
	updateArtistGet,
	updateArtistPost,
	updateCompanyGet,
	updateCompanyPost,
};

export default updateController;
