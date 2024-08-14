import db from "../storage/db.js";
import { body, validationResult } from "express-validator";

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

async function newAlbumGet(req, res) {
	const artists = await db.getArtists();
	res.render("newAlbum", { artists });
}
async function newArtistGet(req, res) {
	const companies = await db.getCompanies();
	res.render("newArtist", { companies });
}
function newCompanyGet(req, res) {
	res.render("newCompany");
}

const newAlbumPost = [
	validateAlbum,
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).send(errors.array()[0]);
		}

		// // Convert empty strings to undefined for optional fields
		// ["imgUrl", "reviewScore", "discountPrice"].forEach((field) => {
		// 	if (req.body[field] === "") {
		// 		req.body[field] = null;
		// 	}
		// });

		console.log(req.body);
		await db.addAlbum(req.body);
		res.redirect("/");
	},
];

async function newArtistPost(req, res) {
	await db.addArtist(req.body);
	res.redirect("/");
}
async function newCompanyPost(req, res) {
	await db.addCompany(req.body);
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
