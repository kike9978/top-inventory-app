import { Pool } from "pg";

const pool = new Pool({
	host: process.env.LOCAL_DB_HOST,
	user: process.env.LOCAL_DB_USER,
	database: process.env.LOCAL_DB_DATABASE,
	password: process.env.LOCAL_DB_PASSWORD,
	port: process.env.LOCAL_DB_PORT,
});

export default pool;
