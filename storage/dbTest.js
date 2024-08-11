import Album from "./Album";

class Storage {
	constructor() {
		this.storage = {
			0: new Album(
				"+ +",
				"Loona",
				"Loona",
				"Ver A.",
				29.9,
				12,
				"https://0.soompi.io/wp-content/uploads/2018/08/17080540/loona7.jpg",
				5,
				null,
				0,
			),
			1: new Album(
				"+ +",
				"Loona",
				"Loona",
				"Ver B.",
				29.9,
				12,
				"https://upload.wikimedia.org/wikipedia/pt/4/41/Capa_%2B%2B_%C3%A1lbum_Loona.png",
				5,
				null,
				1,
			),
		};
	}

	getItems() {
		return Object.values(this.storage);
	}
}

const storage = new Storage();

export default storage;
