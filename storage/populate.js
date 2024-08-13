import { Client } from "pg";

const client = new Client({
	host: process.env.LOCAL_DB_HOST,
	user: process.env.LOCAL_DB_USER,
	database: process.env.LOCAL_DB_DATABASE,
	password: process.env.LOCAL_DB_PASSWORD,
	port: process.env.LOCAL_DB_PORT,
});
const SQLAlbums = `
CREATE TABLE IF NOT EXISTS albums (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
title TEXT NOT NULL,
artistId INTEGER NOT NULL,
price FLOAT NOT NULL,
discountPrice FLOAT,
imgUrl TEXT,
reviewScore FLOAT,
releaseDate DATE);

INSERT INTO albums (title, artistId, price, discountPrice, imgUrl, reviewScore, releaseDate)
VALUES
('+ +', 1, 29.9, NULL, 'https://upload.wikimedia.org/wikipedia/en/b/bd/%2B%2B_%28Loona_EP%29.jpg', 5, $1),
('X X', 1, 29.9, NULL, 'https://i.scdn.co/image/ab67616d0000b27316caa9e546f536939373fb26', 5, $1);

`;
const SQLArtists = `
CREATE TABLE IF NOT EXISTS artists (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name TEXT NOT NULL,
imgUrl TEXT,
debutDate DATE,
companyId INTEGER);

INSERT INTO artists (name, imgUrl, debutDate)
VALUES
('LOONA', 'https://akamai.sscdn.co/uploadfile/letras/fotos/1/4/0/b/140bfcca76325e621e62fa6156d96796.jpg', $1),
('WooAh!', 'https://thebiaslist.com/wp-content/uploads/2024/04/wooah-blush.jpg', $1);

`;

async function populateAlbums() {
	console.log("Sending...");
	const client = new Client({
		host: process.env.LOCAL_DB_HOST,
		user: process.env.LOCAL_DB_USER,
		database: process.env.LOCAL_DB_DATABASE,
		password: process.env.LOCAL_DB_PASSWORD,
		port: process.env.LOCAL_DB_PORT,
	});
	await client.connect();
	await client.query(SQLAlbums, [new Date()]);
	await client.end();
	console.log("Done");
}
async function populateArtists() {
	console.log("Sending...");
	await client.connect();
	await client.query(SQLArtists, [new Date()]);
	await client.end();
	console.log("Done");
}

async function queryTest() {
	console.log("Reading...");
	await client.connect();
	const { rows } = await client.query("SELECT * FROM albums");
	console.log("Done");
	return rows;
}

async function printQuery() {
	console.log("Loading...");
	await client.connect();

	const { rows } = await client.query(
		"SELECT * FROM albums WHERE id = $1",
		[1],
	);
	await client.end();
	console.log("Done");
	console.log(rows[0]);
	return rows;
}

populateArtists();
