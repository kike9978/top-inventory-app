const formatter = new Intl.DateTimeFormat("en-US", {
	year: "numeric",
	month: "2-digit", // Ensures month is always two digits
	day: "2-digit", // Ensures day is always two digits
});

function shortFormatter(date) {
	const parts = formatter.formatToParts(date);

	const year = parts.find((part) => part.type === "year").value;
	const month = parts.find((part) => part.type === "month").value;
	const day = parts.find((part) => part.type === "day").value;

	return `${year}-${month}-${day}`;
}

export default shortFormatter;
