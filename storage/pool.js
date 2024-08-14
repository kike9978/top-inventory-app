import dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;

const dbSrc = {
	devDb: {
		host: process.env.LOCAL_DB_HOST,
		user: process.env.LOCAL_DB_USER,
		database: process.env.LOCAL_DB_DATABASE,
		password: process.env.LOCAL_DB_PASSWORD,
		port: process.env.LOCAL_DB_PORT,
	},
	prodDb: {
		host: process.env.REMOTE_DB_HOST,
		user: process.env.REMOTE_DB_USER,
		database: process.env.REMOTE_DB_DATABASE,
		password: process.env.REMOTE_DB_PASSWORD,
		port: process.env.REMOTE_DB_PORT,
	},
};

console.log(process.argv[2]);
const pool = new Pool({
	host: dbSrc[process.argv[2]].host,
	user: dbSrc[process.argv[2]].user,
	database: dbSrc[process.argv[2]].database,
	password: dbSrc[process.argv[2]].password,
	port: dbSrc[process.argv[2]].port,
});

export default pool;
