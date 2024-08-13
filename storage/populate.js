import { Client } from "pg";
const SQL = `
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

async function populate() {
	console.log("Sending...");
	const client = new Client({
		host: process.env.LOCAL_DB_HOST,
		user: process.env.LOCAL_DB_USER,
		database: process.env.LOCAL_DB_DATABASE,
		password: process.env.LOCAL_DB_PASSWORD,
		port: process.env.LOCAL_DB_PORT,
	});
	await client.connect();
	await client.query(SQL, [new Date()]);
	await client.end();
	console.log("Done");
}

const client = new Client({
	host: process.env.LOCAL_DB_HOST,
	user: process.env.LOCAL_DB_USER,
	database: process.env.LOCAL_DB_DATABASE,
	password: process.env.LOCAL_DB_PASSWORD,
	port: process.env.LOCAL_DB_PORT,
});

async function queryTest() {
	console.log("Reading...");
	await client.connect();
	const { rows } = await client.query("SELECT * FROM albums");
	await client.end();
	console.log("Done");
	return rows;
}

async function printQuery() {
	const rows = await queryTest();
	console.log(rows);
}

printQuery();
