import storage from "../storage/dbTest";

function indexGet(req, res) {
	const items = storage.getItems();
	res.render("index", { items });
}

const indexController = {
	indexGet,
};

export default indexController;
