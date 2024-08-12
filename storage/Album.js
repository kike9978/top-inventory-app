export default class Album {
	constructor(
		title,
		artistId,
		member,
		version,
		price,
		coverImg,
		reviewScore,
		discountPrice,
		id,
	) {
		this.title = title;
		this.artistId = artistId;
		this.member = member;
		this.version = version;
		this.price = price;
		this.coverImg = coverImg;
		this.reviewScore = reviewScore;
		this.discountPrice = discountPrice;
		this.id = id;
	}
}
