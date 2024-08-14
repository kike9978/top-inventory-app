import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

const env = process.env.ENV || "development";
const dbSrc = {
	development: {
		host: process.env.LOCAL_DB_HOST,
		user: process.env.LOCAL_DB_USER,
		database: process.env.LOCAL_DB_DATABASE,
		password: process.env.LOCAL_DB_PASSWORD,
		port: process.env.LOCAL_DB_PORT,
	},
	production: {
		host: process.env.REMOTE_DB_HOST,
		user: process.env.REMOTE_DB_USER,
		database: process.env.REMOTE_DB_DATABASE,
		password: process.env.REMOTE_DB_PASSWORD,
		port: process.env.REMOTE_DB_PORT,
	},
};

const pool = new Pool({
	host: dbSrc[env].host,
	user: dbSrc[env].user,
	database: dbSrc[env].database,
	password: dbSrc[env].password,
	port: dbSrc[env].port,
});

export default pool;
