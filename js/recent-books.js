var RecentBooks = [];

function loadRecentBooks() {
	fs = require('fs');
	fs.readFile('res/recentbooks.json', addRecentBooks);
}

function addRecentBooks(err, data) {
	let recentBooks = document.getElementById('recent-books');
	let json = JSON.parse(data.toString());
	for (let line in json) {
		let newitem = document.createElement('div');
		newitem.setAttribute('class', 'recent-books-item');
		newitem.innerHTML = "<span class='recent-books-name'>" + line + "</span><span>" + json[line] + "</span>";
		newitem.addEventListener('click', function() {
			openBook(this.children[1].innerHTML);
		});
		recentBooks.appendChild(newitem);
	}
}
