import pool from "./pool";

async function getAlbums() {
	console.log("Loading...");
	const { rows } = await pool.query("SELECT * FROM albums");
	console.log("Done");
	return rows;
}

async function getAlbumById(albumId) {
	return this.storage.albums[albumId];
}

async function getArtistById(artistId) {
	return this.storage.artists[artistId];
}

async function getArtists() {
	return Object.values(this.storage.artists);
}

async function getCompanies() {
	return Object.values(this.storage.companies);
}

async function getCompanyById(companyId) {
	return this.storage.companies[companyId];
}

async function getAlbumsByArtistId(artistId) {
	return Object.values(this.storage.albums).filter(
		(album) => album.artistId === artistId,
	);
}

async function addAlbum(albumData) {
	this.storage.albums[this.id] = new Album(
		albumData.title,
		albumData.artistId,
		albumData.member,
		albumData.price,
		albumData.imgUrl,
		albumData.reviewScore,
		albumData.discountPrice,
		this.id,
		albumData.releaseDate,
	);
	this.id++;
}

async function addArtist(artistData) {
	this.storage.artists[this.id] = new Artist(
		this.id,
		artistData.name,
		artistData.debutDate,
		artistData.imgUrl,
		artistData.companyId,
	);
	this.id++;
}
async function addCompany(companyData) {
	this.storage.companies[this.id] = new Company(this.id, companyData.name);
	this.id++;
}
