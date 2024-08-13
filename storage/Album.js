export default class Album {
	constructor(
		title,
		artistId,
		member,
		price,
		imgUrl,
		reviewScore,
		discountPrice,
		id,
		releaseDate,
	) {
		this.title = title;
		this.artistId = artistId;
		this.member = member;
		this.price = price;
		this.imgUrl = imgUrl;
		this.reviewScore = reviewScore;
		this.discountPrice = discountPrice;
		this.id = id;
		this.releaseDate = releaseDate;
	}
}
