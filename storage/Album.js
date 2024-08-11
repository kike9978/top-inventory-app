export default class Album {
	constructor(
		title,
		artist,
		member,
		version,
		price,
		stock,
		coverImg,
		reviewScore,
		discontPrice,
		id,
	) {
		this.title = title;
		this.artist = artist;
		this.member = member;
		this.version = version;
		this.price = price;
		this.stock = stock;
		this.coverImg = coverImg;
		this.reviewScore = reviewScore;
		this.discontPrice = discontPrice;
		this.id = id;
	}
}
