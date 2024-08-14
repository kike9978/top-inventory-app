export default class Album {
	constructor(
		title,
		artistId,
		price,
		imgUrl,
		reviewScore,
		discountPrice,
		id,
		releaseDate,
		trackList,
	) {
		this.title = title;
		this.artistId = artistId;
		this.price = price;
		this.imgUrl = imgUrl;
		this.reviewScore = reviewScore;
		this.discountPrice = discountPrice;
		this.id = id;
		this.releaseDate = releaseDate;
		this.trackList = trackList;
	}
}
