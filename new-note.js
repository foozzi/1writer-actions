function formatSimpleDate(date) {
	// 2024-02-24
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");

	return `${year}-${month}-${day}`;
}

function formatDateTimeUUID(date) {
	// 202402241010
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");

	return `${year}${month}${day}${hours}${minutes}`;
}
function setNewNote() {
	const text = `---
title: .....
date: ...... ${formatSimpleDate(new Date())}
id: ........ ${formatDateTimeUUID(new Date())}
---`;
	editor.setText(text);
}
