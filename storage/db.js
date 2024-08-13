import pool from "./pool";

async function getAlbums() {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM albums");
	console.log("Done");
	return rows;
}

async function getAlbumById(albumId) {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM albums WHERE id = $1", [
		albumId,
	]);
	console.log("Done");
	return rows[0];
}

async function getArtistById(artistId) {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM artists WHERE id = $1", [
		artistId,
	]);
	console.log("Done");
	return rows[0];
}

async function getArtists() {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM artists");
	console.log("Done");
	return rows;
}

async function getCompanies() {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM companies");
	console.log("Done");
	return rows;
}

async function getCompanyById(companyId) {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM artists WHERE id = $1", [
		companyId,
	]);
	console.log("Done");
	return rows[0];
}

async function getAlbumsByArtistId(artistId) {
	console.log("Loading...");
	const { rows } = await pool.query(
		"SELECT * FROM albums JOIN artists ON albums.artistIs = artist.id WHERE artist.id = $1",
		[artistId],
	);
	console.log("Done");
	return rows;
}

async function addAlbum(albumData) {
	console.log("Loading...");
	await pool.query(
		"INSERT INTO albums (title, artistId, member,price, imgUrl, reviewScore, discountPrice, releaseDate) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
		[
			albumData.title,
			albumData.artistId,
			albumData.member,
			albumData.price,
			albumData.imgUrl,
			albumData.reviewScore,
			albumData.discountPrice,
			albumData.releaseDate,
		],
	);
	console.log("Done");
}

async function addArtist(artistData) {
	console.log("Loading...");
	await pool.query(
		"INSERT INTO artists (name, debutDate, imgUrl,companyId) VALUES ($1, $2, $3, $4)",
		[
			artistData.name,
			artistData.debutDate,
			artistData.imgUrl,
			artistData.companyId,
		],
	);
	console.log("Done");
}
async function addCompany(companyData) {
	console.log("Loading...");
	await pool.query("INSERT INTO companies (name, ) VALUES ($1)", [
		companyData.name,
	]);
	console.log("Done");
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
