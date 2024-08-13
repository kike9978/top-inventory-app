import Album from "./Album";
import Artist from "./Artist";

class Storage {
	constructor() {
		this.id = 3;
		this.storage = {
			albums: {
				0: new Album(
					"+ +",
					1,
					"Loona",
					29.9,
					"https://0.soompi.io/wp-content/uploads/2018/08/17080540/loona7.jpg",
					5,
					null,
					0,
					new Date(),
				),
				1: new Album(
					"+ +",
					1,
					"Loona",
					29.9,
					"https://upload.wikimedia.org/wikipedia/pt/4/41/Capa_%2B%2B_%C3%A1lbum_Loona.png",
					5,
					null,
					1,
					new Date(),
				),
			},
			artists: {
				1: new Artist(1, "LOONA", new Date(), "", "Block Berry Creative"),
				2: new Artist(2, "WooAh!", new Date(), "", ""),
			},
		};
	}

	getItems() {
		return Object.values(this.storage.albums);
	}

	getAlbumById(albumId) {
		return this.storage.albums[albumId];
	}

	getArtistById(artistId) {
		return this.storage.artists[artistId];
	}

	getArtists() {
		return Object.values(this.storage.artists);
	}

	addAlbum(albumData) {
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

	addArtist(artistData) {
		this.storage.artists[this.id] = new Artist(
			this.id,
			artistData.name,
			artistData.debutDate,
			artistData.imgUrl,
			artistData.company,
		);
		this.id++;
	}
}

const storage = new Storage();

export default storage;
