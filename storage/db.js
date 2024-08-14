import pool from "./pool.js";
import Album from "./Album.js";
import Artist from "./Artist.js";
import Company from "./Company.js";

function transformToAlbum(data) {
	return new Album(
		data.title,
		data.artist_id,
		data.price,
		data.img_url,
		data.review_score,
		data.discount_price,
		data.id,
		data.release_date,
	);
}

function transformToArtist(data) {
	return new Artist(
		data.id,
		data.name,
		data.debut_date,
		data.img_url,
		data.company_id,
	);
}

function transformToCompany(data) {
	return new Company(data.id, data.name);
}
async function getAlbums() {
	const { rows } = await pool.query("SELECT * FROM albums");
	const albums = rows.map((row) => {
		return transformToAlbum(row);
	});
	return albums;
}

async function getAlbumById(albumId) {
	const { rows } = await pool.query("SELECT * FROM albums WHERE id = $1", [
		albumId,
	]);
	return transformToAlbum(rows[0]);
}

async function getArtistById(artistId) {
	const { rows } = await pool.query("SELECT * FROM artists WHERE id = $1", [
		artistId,
	]);

	return transformToArtist(rows[0]);
}

async function getArtists() {
	const { rows } = await pool.query("SELECT * FROM artists");
	const artists = rows.map((row) => transformToArtist(row));
	return artists;
}

async function getCompanies() {
	const { rows } = await pool.query("SELECT * FROM companies");
	const companies = rows.map((row) => transformToCompany(row));
	return companies;
}

async function getCompanyById(companyId) {
	const { rows } = await pool.query("SELECT * FROM artists WHERE id = $1", [
		companyId,
	]);

	return transformToCompany(rows[0]);
}

async function getAlbumsByArtistId(artistId) {
	const { rows } = await pool.query(
		"SELECT albums.title, albums.artist_id,albums.price, albums.img_url, albums.review_score, albums.discount_price, albums.id, albums.release_date FROM albums JOIN artists ON albums.artist_id = artists.id WHERE artists.id = $1",
		[artistId],
	);

	const albums = rows.map((row) => transformToAlbum(row));
	return albums;
}

async function addAlbum(albumData) {
	// Prepare the query parts
	const fields = ["title", "artist_id", "price", "release_date"];
	const values = [
		albumData.title,
		albumData.artistId,
		albumData.price,
		albumData.releaseDate,
	];
	const placeholders = ["$1", "$2", "$3", "$4"];
	let nextPlaceholder = 5;

	// Optional fields
	const optionalFields = [
		{ key: "imgUrl", column: "img_url" },
		{ key: "reviewScore", column: "review_score" },
		{ key: "discountPrice", column: "discount_price" },
	];

	optionalFields.forEach((field) => {
		if (albumData[field.key] !== undefined && albumData[field.key] !== "") {
			fields.push(field.column);
			values.push(albumData[field.key]);
			placeholders.push(`$${nextPlaceholder}`);
			nextPlaceholder++;
		}
	});

	// Construct the query
	const query = `INSERT INTO albums (${fields.join(", ")}) VALUES (${placeholders.join(", ")})`;

	// Execute the query
	await pool.query(query, values);
}

async function addArtist(artistData) {
	await pool.query(
		"INSERT INTO artists (name, debut_date, img_url,company_id) VALUES ($1, $2, $3, $4)",
		[
			artistData.name,
			artistData.debutDate,
			artistData.imgUrl,
			artistData.companyId,
		],
	);
}
async function addCompany(companyData) {
	await pool.query("INSERT INTO companies (name) VALUES ($1)", [
		companyData.name,
	]);
}

const db = {
	getAlbums,
	getArtists,
	getCompanies,
	getAlbumById,
	getAlbumsByArtistId,
	getArtistById,
	addAlbum,
	addArtist,
	addCompany,
	getCompanyById,
};

export default db;
