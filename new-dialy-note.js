function toCustomISOStringWithoutMillis(date) {
	// 2024-02-24T09:53:53Z-05:00
	const datePart = date.toISOString().substring(0, 19); // YYYY-MM-DDTHH:MM:SS

	const offset = -date.getTimezoneOffset();
	const offsetSign = offset >= 0 ? "+" : "-";
	const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(
		2,
		"0",
	);
	const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, "0");
	const offsetString = offsetSign + offsetHours + ":" + offsetMinutes;

	return datePart + "Z" + offsetString;
}

function formatDate(date) {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const dayOfWeek = days[date.getDay()];
	const month = months[date.getMonth()];
	const day = date.getDate();
	const year = date.getFullYear();

	let suffix;
	if (day % 10 === 1 && day !== 11) {
		suffix = "st";
	} else if (day % 10 === 2 && day !== 12) {
		suffix = "nd";
	} else if (day % 10 === 3 && day !== 13) {
		suffix = "rd";
	} else {
		suffix = "th";
	}

	return `${dayOfWeek}, ${month} ${day}${suffix}, ${year}`;
}

function getWeekNumber(d) {
	// 08
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
	return weekNo.toString().padStart(2, "0");
}

function formatSimpleDate(date) {
	// 2024-02-24
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");

	return `${year}-${month}-${day}`;
}

function setNewNote() {
	const text = `---
RFC: ....... ${toCustomISOStringWithoutMillis(new Date())}
date: ...... ${formatSimpleDate(new Date())}
---
### ${formatSimpleDate(new Date())}


**Week**: ${getWeekNumber(new Date())}`;
	editor.setText(text);
}

setNewNote();
